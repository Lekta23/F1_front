import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotDetailsComponent } from './pages/pilot-details/pilot-details.component';
import { PilotListComponent } from './pages/pilot-list/pilot-list.component';
import { PilotComponent } from './pilot.component';

const routes: Routes = [
  {
    path: '',
    component : PilotComponent,
    children : [
      {
        path : 'pilot',
        component : PilotListComponent
      },
      {
        path : ':id',
        component : PilotDetailsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PilotRoutingModule { }
