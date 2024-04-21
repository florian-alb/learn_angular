import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DividerComponent
  ],
  exports: [DividerComponent]
})
export class SharedModule { }
