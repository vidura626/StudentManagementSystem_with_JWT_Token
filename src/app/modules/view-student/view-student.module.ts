import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewStudentRoutingModule} from './view-student-routing.module';
import {ViewStudentFormComponent} from './pages/view-student-form/view-student-form.component';
import {ViewAllStudentsComponent} from './pages/view-all-students/view-all-students.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    ViewStudentFormComponent,
    ViewAllStudentsComponent
  ],
  imports: [
    CommonModule,
    ViewStudentRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule
  ]
  ,
  exports: [
    ViewStudentFormComponent,
    ViewAllStudentsComponent
  ]
})
export class ViewStudentModule {
}
