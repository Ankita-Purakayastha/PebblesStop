import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarringdetailsRoutingModule } from './earringdetails-routing.module';
import { EarringdetailsComponent } from './earringdetails.component';


@NgModule({
  declarations: [EarringdetailsComponent],
  imports: [
    CommonModule,
    EarringdetailsRoutingModule
  ]
})
export class EarringdetailsModule { }
