import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotDetailsComponent } from './pilot/pages/pilot-details/pilot-details.component';
import { PilotListComponent } from './pilot/pages/pilot-list/pilot-list.component';
import { PilotComponent } from './pilot/pilot.component';
import { TeamDetailsComponent } from './team/pages/team-details/team-details.component';
import { TeamListComponent } from './team/pages/team-list/team-list.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: 'pilot',
    component: PilotListComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'pilot', // child route path
        component: PilotListComponent, // child route component that the router renders
      },
      {
        path: ':id',
        component: PilotDetailsComponent, // another child route component that the router renders
      },
    ],
  },

  {
    path: 'team',
    component : TeamListComponent,
    children : [
      {
        path : 'team',
        component : TeamListComponent,
      },
      {
        path : ':id',
        component : TeamDetailsComponent,
      },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
