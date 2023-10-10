import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ViewCourseModule} from "../view-course/view-course.module";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('../view-course/view-course.module').then(m => m.ViewCourseModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
