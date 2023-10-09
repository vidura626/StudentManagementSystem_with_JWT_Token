import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
