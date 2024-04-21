import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModsRoutingModule,
    ModsHomeComponent
  ]
})
export class ModsModule { }
