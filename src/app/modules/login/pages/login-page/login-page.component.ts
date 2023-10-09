import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/service/auth.service";
import {User} from "../../../../shared/model/util/User";
import {getCookie} from "typescript-cookie";

@Component({
  selector: 'wj-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
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
      this.authService.login(user).subscribe(res => {
        let cookie = getCookie("XSRF-TOKEN")!;
        if (cookie) {
          window.sessionStorage.setItem("XSRF-TOKEN", cookie);
        }
      })
    }
  }
}
