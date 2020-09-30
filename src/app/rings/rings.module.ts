import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RingsRoutingModule } from './rings-routing.module';
import { RingsComponent } from './rings.component';


@NgModule({
  declarations: [RingsComponent],
  imports: [
    CommonModule,
    RingsRoutingModule
  ]
})
export class RingsModule { }
