import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    ElementsHomeComponent
  ], 
  exports: []
})
export class ElementsModule { }
