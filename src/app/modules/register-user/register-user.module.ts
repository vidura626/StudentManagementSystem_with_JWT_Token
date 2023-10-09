import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterUserRoutingModule} from './register-user-routing.module';
import {SelectRolePageComponent} from './pages/select-role-page/select-role-page.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {CoreModule} from "../../core/core.module";
import {RegisterUserComponent} from './pages/register-user/register-user.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    SelectRolePageComponent,
    RegisterUserComponent,
  ],
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    CoreModule,
    MatRadioModule,
    MatCardModule,
  ]
})
export class RegisterUserModule { }
