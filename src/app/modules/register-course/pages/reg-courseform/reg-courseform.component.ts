import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TeacherInterface} from "../../../../shared/model/core/Teacher.interface";
import {CourseService} from "../../../../core/service/course.service";
import {CourseRequest} from "../../../../shared/model/rquestModels/Course.request";

@Component({
  selector: 'wj-reg-courseform',
  templateUrl: './reg-courseform.component.html',
  styleUrls: ['./reg-courseform.component.scss']
})
export class RegCourseformComponent implements OnInit {
  courseForm!: FormGroup;
  teachers!: TeacherInterface[];

  constructor(private formBuilder: FormBuilder,
              private courseService: CourseService) {
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
        validators: [Validators.required],
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
      this.courseService.registerCourse(this.courseDetails).subscribe(res => {
        console.log(res)
      })

    }
    console.log(this.courseForm.value);
  }
}
