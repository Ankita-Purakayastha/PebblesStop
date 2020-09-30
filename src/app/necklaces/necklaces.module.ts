import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NecklacesRoutingModule } from './necklaces-routing.module';
import { NecklacesComponent } from './necklaces.component';


@NgModule({
  declarations: [NecklacesComponent],
  imports: [
    CommonModule,
    NecklacesRoutingModule
  ]
})
export class NecklacesModule { }
