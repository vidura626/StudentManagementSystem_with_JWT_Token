import {Component, inject} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../../../core/service/user.service";
import {UserInfoRequest} from "../../../../shared/model/rquestModels/UserInfo.request";
import {RolesInterface} from "../../../../shared/model/Roles.interface";


@Component({
  selector: 'wj-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  roles: RolesInterface[] = [
    {
      value: 'student',
      roleName: 'Student'
    },
    {
      value: 'teacher',
      roleName: 'Teacher'
    },
    {
      value: 'admin',
      roleName: 'Admin'
    }
  ];
  hide = true;
  private fb = inject(FormBuilder);
  registerForm = this.fb.group({
    name: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    address: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    contact: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    userName: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    pwd: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    confirmPwd: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    role: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    })
  });

  constructor(private regService: UserService) {
  }

  regUserInfo!: UserInfoRequest;

  onSubmit(registerForm: FormGroup): void {
    console.log(registerForm.valid)
    console.log(registerForm.value)
    if (registerForm.valid) {
      this.regUserInfo = {
        role: registerForm.value.role,
        adminUserName: '',
        status: false,
        name: registerForm.value.firstName,
        address: registerForm.value.address,
        contact: registerForm.value.contact,
        userName: registerForm.value.userName,
        pwd: registerForm.value.pwd
      }
      this.regService.registerUser(this.regUserInfo).subscribe(res => {
        //TODO: Handle Response of reg user
        console.log(res)
      });
    }
  }

  resetForm(registerForm: FormGroup) {
    registerForm.reset();
  }
}
