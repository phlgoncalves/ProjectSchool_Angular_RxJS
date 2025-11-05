import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../shared/shared.module';
import { CoursesMaterialsModule } from '../../shared/materials/courses-mat.module';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    CoursesMaterialsModule,
    FormsModule
]
})
export class CoursesModule { }
