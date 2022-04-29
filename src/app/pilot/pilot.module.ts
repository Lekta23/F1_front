import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PilotListComponent } from './pages/pilot-list/pilot-list.component';
import { PilotDetailsComponent } from './pages/pilot-details/pilot-details.component';
import { PilotComponent } from './pilot.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { PilotService } from './services/pilot.service';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';
import { PilotFormComponent } from './components/pilot-form/pilot-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PilotDetailsComponent,
    PilotComponent,
    PilotListComponent,
    PilotFormComponent
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
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PilotService]
})
export class PilotModule { }
