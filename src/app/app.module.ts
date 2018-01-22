import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TooltipModule } from './shared/components/tooltip/tooltip.module';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/core.module';
import { CustomTooltipComponent } from './tooltip/components/custom-tooltip/custom-tooltip.component';
import { MaterialTooltipComponent } from './tooltip/components/material-tooltip/material-tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomTooltipComponent,
    MaterialTooltipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTooltipModule,
    TooltipModule,
    CoreModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'custom-tooltip', component: CustomTooltipComponent },
      { path: 'material-tooltip', component: MaterialTooltipComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
