import {AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../../../core/service/course.service";
import {CourseRequest} from "../../../../shared/model/rquestModels/Course.request";
import {TeacherService} from "../../../../core/service/teacher.service";
import {catchError, pipe, Subscription, throwError} from "rxjs";
import {TeacherInterface} from "../../../../shared/model/core/Teacher.interface";
import {ResponseInterface} from "../../../../shared/model/util/Response.interface";
import {map} from "rxjs/operators";

@Component({
  selector: 'wj-reg-courseform',
  templateUrl: './reg-courseform.component.html',
  styleUrls: ['./reg-courseform.component.scss']
})
export class RegCourseformComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  courseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private courseService: CourseService,
              private teacherService: TeacherService) {
  }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      description: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      fee: new FormControl(0, {
        validators: [Validators.min(0), Validators.required],
        updateOn: 'blur',
      }),
      teacherID: new FormControl('', {
        // validators: [Validators.required],
        updateOn: 'blur',
      }),
    });
  }

  courseDetails!: CourseRequest;

  onSubmit(courseForm: FormGroup) {
    // TODO: Handle form submission here
    if (courseForm.valid) {
      this.courseDetails = {
        id: courseForm.value.id,
        name: courseForm.value.name,
        description: courseForm.value.description,
        modifiedDate: '',
        fee: courseForm.value.fee,
        teacherID: courseForm.value.teacherID
      }
      this.courseService.registerCourse(this.courseDetails)
        .pipe(
          catchError((err: any) => {
            return err
          })
        ).subscribe((res: any) => {
        console.log(res)
      })
    }
    // console.log(this.courseForm.value);
  }


  ngAfterViewInit(): void {
    this.teacherService.getAllTeachers().
      pipe(
        catchError((err: any) => {
          // let status: ResponseInterface = JSON.parse(err.error.text);
          let name = err.error.text;
          return err;
        })
      ).subscribe((res:any) => {
          console.log(res)
          this.teachers = res.data;
      }
    );
  }

  teachers: TeacherInterface[] = [];

  getAllTeachers() {

  }

  ngOnDestroy(): void {
    console.log("End")
  }

  ngAfterContentInit(): void {

  }
}
