import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RingdetailsComponent } from '../ringdetails/ringdetails.component';

import { RingsComponent } from './rings.component';

const routes: Routes = [{ path: '', component: RingsComponent },
{
  path:'ringdetails/:id',component: RingdetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RingsRoutingModule { }
