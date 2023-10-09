import {Component, Input, OnInit} from '@angular/core';
import {CourseView} from "../../../../shared/model/views/Course.view";
import {LoginService} from "../../../../core/service/login.service";
import {CourseService} from "../../../../core/service/course.service";
import {TeacherService} from "../../../../core/service/teacher.service";

@Component({
  selector: 'wj-course-view-card',
  templateUrl: './course-view-card.component.html',
  styleUrls: ['./course-view-card.component.scss']
})
export class CourseViewCardComponent implements OnInit {
  @Input() course: CourseView = {
    id: 1,
    name: 'Angular',
    description: 'Angular is a platform for building mobile and desktop web applications',
    fee: 0,
    teacherName: 'John Doe',
    date: new Date(2023, 0, 1),
  };
  isTeacher: boolean = false;

  constructor(private loginService: LoginService,
              private courseService: CourseService,
              private teacherService: TeacherService) {
  }

  ngOnInit(): void {
    if (this.loginService.getLoginStatus()) {
      this.isTeacher = this.loginService.getLoginRole() === 'teacher';
      console.log(this.isTeacher);
    }
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id);
  }

  updateCourse(course: CourseView) {

  }

  viewCourse(id: number) {

  }
}
