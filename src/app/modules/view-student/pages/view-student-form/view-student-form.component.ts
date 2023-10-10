import {Component, inject, Input, OnInit} from '@angular/core';
import {RolesInterface} from "../../../../shared/model/Roles.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/service/user.service";
import {UserInfoRequest} from "../../../../shared/model/rquestModels/UserInfo.request";
import {StudentService} from "../../../../core/service/student.service";

@Component({
  selector: 'wj-view-student-form',
  templateUrl: './view-student-form.component.html',
  styleUrls: ['./view-student-form.component.scss']
})
export class ViewStudentFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private userService: UserService = inject(UserService);
  private studentService: StudentService = inject(StudentService);
  @Input() studentId!: number;

  registerForm: FormGroup = this.fb.group({
    status: new FormControl('DISABLE', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    adminUserName: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
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


  roles: RolesInterface[] = [];
  hide = true;

  constructor() {
  }

  ngOnInit(): void {
    this.roles = this.userService.getRoles();
    this.studentService.getStudent(this.studentId).subscribe(res => {
      this.regUserInfo = res.data;
      this.registerForm = this.fb.group({
        status: new FormControl((this.regUserInfo?.status) ? 'ACTIVE' : 'DISABLE', {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        adminUserName: new FormControl(this.regUserInfo?.adminUserName, {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        name: new FormControl(this.regUserInfo?.name, {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        address: new FormControl(this.regUserInfo?.address, {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        contact: new FormControl(this.regUserInfo?.contact, {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        userName: new FormControl(this.regUserInfo?.userName, {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        }),
        pwd: new FormControl(this.regUserInfo?.pwd, {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        confirmPwd: new FormControl(this.regUserInfo?.pwd, {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        role: new FormControl(this.regUserInfo?.role, {
          validators: [Validators.required],
          updateOn: 'blur',
        })
      });
    })
  }


  regUserInfo!: UserInfoRequest;

  onSubmit(registerForm: FormGroup): void {
    if (registerForm.valid) {
      this.regUserInfo = {
        role: registerForm.value.role,
        adminUserName: registerForm.value.adminUserName,
        status: true,
        name: registerForm.value.firstName,
        address: registerForm.value.address,
        contact: registerForm.value.contact,
        userName: registerForm.value.userName,
        pwd: registerForm.value.pwd
      }


      this.studentService.updateStudent(this.regUserInfo).subscribe(res => {
        //TODO: Handle Response of reg user
        console.log(res)
      });
    }
  }

  resetForm(registerForm: FormGroup) {
    registerForm.reset();
  }
}
