import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/service/auth.service";
import {User} from "../../../../shared/model/util/User";
import {getCookie} from "typescript-cookie";
import {Router} from "@angular/router";
import {catchError} from "rxjs";

@Component({
  selector: 'wj-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let user: User = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
      sessionStorage.setItem("userdetails", JSON.stringify(user));
      this.authService.login(user).pipe(
        catchError(error => {
          alert('Invalid Username or Password');
          this.router.navigate(['/login']);
          return error;
        })
      ).subscribe((resp: any) => {
        window.sessionStorage.setItem('Authorization', resp.headers.get('Authorization'));
        if(getCookie("XSRF-TOKEN")) {
          window.sessionStorage.setItem('XSRF-TOKEN', <string>getCookie("XSRF-TOKEN"));
        }
        sessionStorage.removeItem("userdetails");
        this.router.navigate(['/courses/register']);
      });
    }
  }
}
