import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ViewCourseModule} from "../view-course/view-course.module";
import {MatExpansionModule} from "@angular/material/expansion";
import { DashboardButtonsComponent } from './components/dashbbord-buttons/dashboard-buttons.component';
import { ToggleThemeComponent } from './components/togle-theme/toggle-theme.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardButtonsComponent,
    ToggleThemeComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        ViewCourseModule,
        MatExpansionModule
    ]
})
export class DashboardModule { }
