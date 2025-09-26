import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { SupportMaterialsModule } from '../../shared/materials/support-mat.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    SupportMaterialsModule,
    SharedModule
  ]
})
export class SupportModule { }
