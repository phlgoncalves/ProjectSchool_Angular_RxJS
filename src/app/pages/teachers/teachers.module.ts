import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeachersMaterialsModule } from '../../shared/materials/teachers-mat.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TeachersMaterialsModule,
    SharedModule
  ]
})
export class TeachersModule { }
