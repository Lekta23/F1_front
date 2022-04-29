import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { TeamListComponent } from './pages/team-list/team-list.component';
import { TeamService } from './services/team.service';
import { TeamComponent } from './team.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    TeamListComponent,
    TeamDetailsComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    BrowserModule,
  ],
  providers: [TeamService]
})
export class TeamModule { }
