import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../shared/shared.module';
import { CoursesMaterialsModule } from '../../shared/materials/courses-mat.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    CoursesMaterialsModule
  ]
})
export class CoursesModule { }
