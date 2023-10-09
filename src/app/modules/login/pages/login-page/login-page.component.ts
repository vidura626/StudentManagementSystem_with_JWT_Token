import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/service/auth.service";

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
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
      // Perform login logic here (e.g., send data to the server)
      console.log(this.loginForm.value);
    }
  }
}
