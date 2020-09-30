import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NecklacedetailsComponent } from '../necklacedetails/necklacedetails.component';

import { NecklacesComponent } from './necklaces.component';

const routes: Routes = [{ path: '', component: NecklacesComponent },
{
  path:'necklacedetails/:id', component:NecklacedetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NecklacesRoutingModule { }
