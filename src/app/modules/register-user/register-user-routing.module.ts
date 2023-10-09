import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterUserComponent} from "./pages/register-user/register-user.component";
const routes: Routes = [
  // {
  //   path: '', component: SelectRolePageComponent
  // },
  {
    path: '', component: RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterUserRoutingModule {
}
