import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {API_PATH, API_PATH_SERVICE} from "./service/api-path.service";


@NgModule({
  declarations: [],
  providers: [
    {
      provide: API_PATH_SERVICE,
      useValue: API_PATH
    }
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: []
})
export class CoreModule {
}
