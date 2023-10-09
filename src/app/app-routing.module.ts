import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  // },
  {
    path: '',
    loadChildren: () => import('../app/modules/view-course/view-course.module').then(m => m.ViewCourseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
