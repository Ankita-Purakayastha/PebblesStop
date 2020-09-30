import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarringsRoutingModule } from './earrings-routing.module';
import { EarringsComponent } from './earrings.component';


@NgModule({
  declarations: [EarringsComponent],
  imports: [
    CommonModule,
    EarringsRoutingModule
  ]
})
export class EarringsModule { }
