import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { StaffComponent } from './staff/staff.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SplashPageComponent },
  { path: 'about', component: StaffComponent },
  { path: 'classrooms', component: ClassroomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
