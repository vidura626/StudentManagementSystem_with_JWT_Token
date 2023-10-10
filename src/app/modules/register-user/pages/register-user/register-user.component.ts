import {Component, inject, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UserService} from "../../../../core/service/user.service";
import {UserInfoRequest} from "../../../../shared/model/rquestModels/UserInfo.request";
import {RolesInterface} from "../../../../shared/model/Roles.interface";
import {TeacherInterface} from "../../../../shared/model/core/Teacher.interface";
import {TeacherService} from "../../../../core/service/teacher.service";
import Swal from 'sweetalert2';
import {AdminService} from "../../../../core/service/admin.service";
import {catchError} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'wj-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  hide = true;
  private fb = inject(FormBuilder);
  private teacherService: TeacherService = inject(TeacherService);
  private adminService: AdminService = inject(AdminService);
  private router: Router = inject(Router);

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
      updateOn: 'blur',
      validators: [Validators.required, this.pwdMatchValidator],
    }),
    role: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    admin: new FormControl('', {
      // validators: [Validators.required],
      updateOn: 'blur',
    })
  });

  constructor(private regService: UserService) {
  }

  regUserInfo!: UserInfoRequest;
  admins: TeacherInterface[] = [];
  adminFormControl: FormControl = new FormControl();

  isPwdMtches!: boolean;

  onSubmit(registerForm: FormGroup): void {
    if (registerForm.valid) {
      this.regUserInfo = {
        role: registerForm.value.role,
        adminUserName: registerForm.value.admin,
        status: false,
        name: registerForm.value.firstName,
        address: registerForm.value.address,
        contact: registerForm.value.contact,
        userName: registerForm.value.userName,
        pwd: registerForm.value.pwd
      }
      console.log(this.regUserInfo)
      this.regService.registerUser(this.regUserInfo,)
        .pipe(
          catchError(
            err => {
              console.log(err)
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: err.error.message,
                showConfirmButton: true
              })
              return err
            }
          )
        )
        .subscribe(res => {
          //TODO: Handle Response of reg user
          console.log(res)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Registered',
            showConfirmButton: false,
            timer: 1500
          });
          this.resetForm(registerForm);
          this.router.navigate(['login'])
        });
    }
  }

  resetForm(registerForm: FormGroup) {
    registerForm.reset();
  }

  ngOnInit(): void {
    this.adminService.getAllAdmins().subscribe(
      res => {
        this.admins = res.data
      }
    )
  }

  pwdMatchValidator(c: FormControl): ValidationErrors | null {

    let value1 = c.parent?.get('pwd')?.value;
    let value2 = c.parent?.get('confirmPwd')?.value;
    if (value1 && value2 && value1 !== value2) {
      return {'mismatch': true}
    }
    return null
  }
}
