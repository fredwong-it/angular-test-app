import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent
  ],
  exports: [
    BsNavbarComponent,
    HomeComponent
  ]
})
export class CoreModule { }
