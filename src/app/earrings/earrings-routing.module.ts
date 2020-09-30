import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarringdetailsComponent } from '../earringdetails/earringdetails.component';

import { EarringsComponent } from './earrings.component';

const routes: Routes = [{ path: '', component: EarringsComponent },
{
  path:'earringdetails/:id',component:EarringdetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarringsRoutingModule { }
