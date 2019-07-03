import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StaffComponent } from './staff/staff.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StaffComponent,
    SplashPageComponent,
    ClassroomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
