import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseSettingsComponent} from "./pages/course-settings/course-settings.component";
import {ViewAllCourseComponent} from "./pages/view-all-course/view-all-course.component";

const routes: Routes = [
  {
    path: '',
    component: ViewAllCourseComponent,
  },
  {
    path: 'view/:id',
    component: CourseSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCourseRoutingModule {
}
