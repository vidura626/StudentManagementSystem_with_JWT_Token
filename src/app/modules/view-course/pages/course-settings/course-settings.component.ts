import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../../../core/service/course.service";
import {CourseRequest} from "../../../../shared/model/rquestModels/Course.request";
import {TeacherService} from "../../../../core/service/teacher.service";
import {Router} from "@angular/router";

@Component({
  selector: 'wj-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.scss']
})
export class CourseSettingsComponent {
  courseForm!: FormGroup;
  @Input() private courseID!: number | undefined;

  constructor(private formBuilder: FormBuilder,
              private courseService: CourseService,
              private teacherService: TeacherService,
              private router: Router) {
    this.courseID = this.router.getCurrentNavigation()?.id;
  }

  ngOnInit(): void {
    this.courseService.getCourse(this.courseID).subscribe(res => {
      let courseReq: CourseRequest = res.data;
      this.courseForm = this.formBuilder.group({
        id: new FormControl(courseReq.id),
        name: new FormControl(courseReq.name, {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        description: new FormControl(courseReq.description, {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        fee: new FormControl(courseReq.fee, {
          validators: [Validators.min(0), Validators.required],
          updateOn: 'blur',
        }),
        teacherID: new FormControl(courseReq.teacherID, {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
      });
    })
    // if (this.courseID) {
    //   this.courseService.getCourse(this.courseID).subscribe(
    //     res => {
    //       let courseReq: CourseRequest = res.data;
    //       this.courseForm.setValue(
    //         {
    //           id: courseReq.id,
    //           name: courseReq.name,
    //           description: courseReq.description,
    //           fee: courseReq.fee,
    //           teacherID: courseReq.teacherID
    //         }
    //       );
    //     }
    //   );
    // }
  }

  courseDetails!: CourseRequest;

  onUpdate(courseForm: FormGroup) {
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
      this.courseService.updateCourse(this.courseDetails).subscribe(res => {
        console.log(res)
      })

    }
    console.log(this.courseForm.value);
  }

  reset(courseForm: FormGroup) {
    this.courseForm.reset();
  }
}
