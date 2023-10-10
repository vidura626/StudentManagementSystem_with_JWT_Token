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

  ngOnInit()
    :
    void {
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
      this.authService.login(user).pipe(
        catchError(error => {
          this.router.navigate(['/login']).then(r => {
            window.location.reload();
          });
          alert('Invalid Username or Password');
          return error
        })
      ).subscribe((resp: any) => {
        let authorization = resp.headers.get('Authorization');
        window.sessionStorage.setItem('Authorization', resp.headers.get('Authorization'));
        this.authService.setLogin = true;
        let cookie = getCookie("XSRF-TOKEN")!;
        if (cookie) {
          window.sessionStorage.setItem("XSRF-TOKEN", cookie);
        }
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
