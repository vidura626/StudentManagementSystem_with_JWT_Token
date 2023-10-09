import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {API_PATH, API_PATH_SERVICE} from "./service/api-path.service";
import {IntercepterService} from "./interceptor/intercepter.service";


@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
    },
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
