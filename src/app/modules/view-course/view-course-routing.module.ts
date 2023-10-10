import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseSettingsComponent} from "./pages/course-settings/course-settings.component";

const routes: Routes = [
  {
    path: '',
    component: CourseSettingsComponent,
    children: [
      {
        path: 'add',
        loadChildren: () => import('../register-course/register-course.module').then(m => m.RegisterCourseModule)
      },
      {
        path: 'update/:id',
        loadChildren: () => import('../register-course/register-course.module').then(m => m.RegisterCourseModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCourseRoutingModule {
}
