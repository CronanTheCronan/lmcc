import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StaffComponent } from './staff/staff.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { DirectionsComponent } from './directions/directions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StaffComponent,
    SplashPageComponent,
    ClassroomsComponent,
    FooterComponent,
    ContactComponent,
    DirectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
