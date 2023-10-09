import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegCourseformComponent} from "./pages/reg-courseform/reg-courseform.component";

const routes: Routes = [
  {
    path: '', component: RegCourseformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCourseRoutingModule {
}
