import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { SharedModule } from '../shared/shared.module';
import { CreateCourseComponent } from './create-course/create-course.component';


@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    ManageCourseComponent,
    CreateCourseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
