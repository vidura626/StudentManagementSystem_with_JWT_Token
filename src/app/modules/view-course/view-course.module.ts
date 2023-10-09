import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewCourseRoutingModule} from './view-course-routing.module';
import {ViewOneCourseComponent} from './pages/view-one-course/view-one-course.component';
import {ViewAllCourseComponent} from './pages/view-all-course/view-all-course.component';
import {CourseViewCardComponent} from './components/course-view-card/course-view-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CourseSettingsComponent} from './pages/course-settings/course-settings.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ViewOneCourseComponent,
    ViewAllCourseComponent,
    CourseViewCardComponent,
    CourseSettingsComponent
  ],
  imports: [
    CommonModule,
    ViewCourseRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class ViewCourseModule { }
