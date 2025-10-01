import { NgModule } from '@angular/core';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
],
  declarations: [
    ToolbarTitleComponent
  ],
  exports: [
    ToolbarTitleComponent
  ]
})
export class SharedModule { }
