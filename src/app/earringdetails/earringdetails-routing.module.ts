import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarringdetailsComponent } from './earringdetails.component';

const routes: Routes = [{ path: '', component: EarringdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarringdetailsRoutingModule { }
