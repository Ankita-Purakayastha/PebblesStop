import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ApiModule} from './api/api.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NecklacedetailsComponent } from './necklacedetails/necklacedetails.component';
import { RingdetailsComponent } from './ringdetails/ringdetails.component';
import { CartComponent } from './cart/cart.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { OrderComponent } from './order/order.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    NavbarComponent,
  
    ContactComponent,
    AboutComponent,
    NecklacedetailsComponent,
    RingdetailsComponent,
    CartComponent,
    UserprofileComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule,
    FormsModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
