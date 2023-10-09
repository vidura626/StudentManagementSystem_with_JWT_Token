import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseViewCardComponent} from "./components/course-view-card/course-view-card.component";
import {ViewAllCourseComponent} from "./pages/view-all-course/view-all-course.component";
import {CourseSettingsComponent} from "./pages/course-settings/course-settings.component";

const routes: Routes = [
  {
    path: '',
    component: CourseSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCourseRoutingModule {
}
