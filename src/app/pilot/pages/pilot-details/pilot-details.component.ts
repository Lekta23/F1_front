import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilot } from 'src/app/core/models/pilot';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { pilotFromData } from 'src/app/core/models/pilotFromData';
import { ActivatedRoute, Router } from '@angular/router';
import { PilotService } from '../../services/pilot.service';


@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})
export class PilotDetailsComponent implements OnInit {
  pilot$ : Observable<Pilot>;

  constructor(
    private _pilotService : PilotService,
    private _activatedRoute: ActivatedRoute,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.fetcheData(params['id']);
  });
}


fetcheData(id: number) {
  this.pilot$ = this._pilotService.getById(id);
}

updatePilot(pilot: Pilot) {
  const pilotFromData: pilotFromData = {
    isUpdateMode: true,
    pilotToUpdate: pilot,
  };

  const dialogRef = this._dialog.open(PilotDetailsComponent, {
    data: pilotFromData,
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.fetcheData(result);
    }
    });

  }

  deletePilot(id : number) {
    this._pilotService.delete(id).subscribe((response) => {
      this._snackBar.open(response.nom, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/pilots');
    });
  }

  goBack() {
    this._location.back();
  }

}
