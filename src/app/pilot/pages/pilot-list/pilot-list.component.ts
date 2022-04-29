import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pilot } from 'src/app/core/models/pilot';
import { PilotService } from '../../services/pilot.service';
import { pilotFromData } from 'src/app/core/models/pilotFromData';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {
  pilot$ : Observable<Pilot[]>
  displayedColumns: string[] = ['id', 'nom', 'prenom'];


  ids : number[] = []
  constructor(
    private _pilotService : PilotService,
    private _router : Router,
    public _dialog : MatDialog
    )
   {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.pilot$ = this._pilotService.get();
  }

  showPilotDetails(pilot: Pilot) {
    this._router.navigateByUrl('/pilot/' + pilot.id);
}

createPilot() {
  const pilotFromData: pilotFromData = {
    isUpdateMode: false,
    idToCreate: Math.max(...this.ids) + 1,
  }
}

setIds(id: number) {
  this.ids.push(id)
}

}

