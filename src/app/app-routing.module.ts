import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./core/guard/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../app/modules/register-user/register-user.module').then(m => m.RegisterUserModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    // canActivate: [authGuard]
  }
  ,
  {
    path: 'courses',
    loadChildren: () => import('../app/modules/view-course/view-course.module').then(m => m.ViewCourseModule)
  },
  {
    path: 'courses/register',
    loadChildren: () => import('../app/modules/register-course/register-course.module').then(m => m.RegisterCourseModule),
    canActivate: [authGuard]
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
