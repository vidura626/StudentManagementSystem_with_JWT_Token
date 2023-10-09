import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CourseView} from "../../../../shared/model/views/Course.view";
import {CourseService} from "../../../../core/service/course.service";
import {CourseRequest} from "../../../../shared/model/rquestModels/Course.request";
import {LoginService} from "../../../../core/service/login.service";

@Component({
  selector: 'wj-view-all-course',
  templateUrl: './view-all-course.component.html',
  styleUrls: ['./view-all-course.component.scss']
})
export class ViewAllCourseComponent implements OnInit {
  courseViewsTest: CourseView[] = [
    {
      id: 1,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications',
      fee: 0,
      teacherName: 'John Doe',
      date: new Date(2023, 0, 1),
    },
    {
      id: 2,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications',
      fee: 0,
      teacherName: 'John Doe',
      date: new Date(2023, 0, 1),
    },
    {
      id: 3,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications',
      fee: 0,
      teacherName: 'John Doe',
      date: new Date(2023, 0, 1),
    },
    {
      id: 4,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications',
      fee: 0,
      teacherName: 'John Doe',
      date: new Date(2023, 0, 1),
    },
    {
      id: 5,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications',
      fee: 0,
      teacherName: 'John Doe',
      date: new Date(2023, 0, 1),
    },
    {
      id: 6,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications',
      fee: 0,
      teacherName: 'John Doe',
      date: new Date(2023, 0, 1),
    },
    {
      id: 7,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications',
      fee: 0,
      teacherName: 'John Doe',
      date: new Date(2023, 0, 1),
    }
  ];
  courseViews: CourseView[] = []; // Replace with your actual card data
  totalItems: number = 100; // Total number of items
  pageSize: number = 10; // Number of items per page
  pageIndex = 0;
  showFirstLastButtons = true;
  getCourses: CourseRequest[] = [];

  constructor(private courseService: CourseService) {
  }
  ngOnInit(): void {
    this.setPageItems();
  }

  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.setPageItems();
    // this.courseService.getAllCoursesWithPaginator(this.pageIndex, this.pageSize).subscribe(
    //   event => {
    //     this.getCourses = event.data;
    //   }
    // )
  }

  setPageItems() {
    this.totalItems = this.courseViewsTest.length;
    let count: number = ((this.pageIndex + 1) * this.pageSize);
    this.courseViews = [];
    for (let i = count - this.pageSize; i < count; i++) {
      if (i < this.courseViewsTest.length)
        this.courseViews.push(this.courseViewsTest[i]);
    }
  }
}
