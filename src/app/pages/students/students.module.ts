import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsMaterialsModule } from '../../shared/materials/students-mat.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    StudentsMaterialsModule,
    SharedModule
  ]
})
export class StudentsModule { }
