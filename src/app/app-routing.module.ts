import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../app/modules/register-user/register-user.module').then(m => m.RegisterUserModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
  ,
  {
    path: 'courses',
    loadChildren: () => import('../app/modules/view-course/view-course.module').then(m => m.ViewCourseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
