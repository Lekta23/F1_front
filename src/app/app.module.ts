import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { PilotModule } from './pilot/pilot.module';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table'  
import { AppRoutingModule } from './app-routing.module';
import { TeamModule } from './team/team.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    CommonModule,
    PilotModule,
    RouterModule,
    MatTableModule,
    AppRoutingModule,
    TeamModule,
    NoopAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
