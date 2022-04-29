import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pilot } from 'src/app/core/models/pilot';
import { pilotFromData } from 'src/app/core/models/pilotFromData';
import { PilotService } from '../../services/pilot.service';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent implements OnInit {
  isUpdateMode: boolean;
  pilotForm: FormGroup;

  constructor(
    private _formBuilder : FormBuilder,
    private _pilotService : PilotService,
    private _SnackBar : MatSnackBar,
    private dialogRef : MatDialogRef<PilotFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: pilotFromData
  ) { 
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  initFormBuilder() {
    this.pilotForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.pilotToUpdate.id
          : this.data.idToCreate,
        Validators.required,
      ],
      nom : [
        this.data.isUpdateMode ? this.data.pilotToUpdate.nom : '',
        Validators.required,
      ],

      prenom : [
        this.data.isUpdateMode ? this.data.pilotToUpdate.prenom : '',
        Validators.required,
      ],

      nationalite : [
        this.data.isUpdateMode ? this.data.pilotToUpdate.nationalite : '',
        Validators.required,
      ],

      dateOfBirth : [
        this.data.isUpdateMode ? this.data.pilotToUpdate.dateOfBirth : '',
        Validators.required,
      ],

      equipe : [
        this.data.isUpdateMode ? this.data.pilotToUpdate.equipe : '',
        Validators.required,
      ],
    });
  }

  closeForm(id? : number) {
    this.pilotForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(pilot : Pilot) {
    if (this.pilotForm.valid){
      if (this.data.isUpdateMode) {
        this._pilotService.update(pilot).subscribe((response) => {
          this.closeForm(pilot.id);
          this._SnackBar.open(response.nom, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        this._pilotService.create(pilot).subscribe((response) => {
          this.closeForm(pilot.id);
          this._SnackBar.open(response.nom, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
        }
      }
}
