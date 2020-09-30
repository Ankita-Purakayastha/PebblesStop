import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthenticationGuard} from './authentication.guard';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [{path:'registration',component:RegistrationComponent},
{path:'login',component:LoginComponent},
// {path:'', redirectTo:'login', pathMatch:'full'},
{path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent ,canActivate:[AuthenticationGuard] },

{path:'contact', component:ContactComponent},
{path:'about',component:AboutComponent},
{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{ path: 'earrings', loadChildren: () => import('./earrings/earrings.module').then(m => m.EarringsModule) },
{path:'cart',component:CartComponent},
{ path: 'necklaces', loadChildren: () => import('./necklaces/necklaces.module').then(m => m.NecklacesModule) },
{ path: 'rings', loadChildren: () => import('./rings/rings.module').then(m => m.RingsModule) },
{path:'userprofile', component:UserprofileComponent},
{path:'order', component:OrderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

