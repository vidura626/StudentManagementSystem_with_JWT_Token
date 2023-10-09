import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterCourseRoutingModule} from './register-course-routing.module';
import {RegCourseformComponent} from './pages/reg-courseform/reg-courseform.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    RegCourseformComponent
  ],
  imports: [
    CommonModule,
    RegisterCourseRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class RegisterCourseModule { }
