import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Team } from 'src/app/core/models/team';
import { TeamService } from '../../services/team.service';
import { teamFromData } from 'src/app/core/models/teamFromData';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  team$: Observable<Team[]>;
  displayedColumns: string[] = ['id', 'nom'];


ids : number[] = []
  constructor(
    private _teamService : TeamService,
    private _router : Router,
    public _dialog : MatDialog
    )
   {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.team$ = this._teamService.get();
  }

  showTeamDetails(team: Team) {
    this._router.navigateByUrl('/team/' + team.id);
  }

  createTeam() {
    const teamFromData: teamFromData = {
      isUpdateMode: false,
      idToCreate: Math.max(...this.ids) + 1,
    }
  }

  setIds(id: number) {
    this.ids.push(id)
  }

}
