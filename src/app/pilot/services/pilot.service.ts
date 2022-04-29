import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot } from './../../core/models/pilot';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  private readonly pilotPath: string = '/pilots';

  constructor(private _http: HttpClient) { }

  get() : Observable<Pilot[]> {
    return this._http.get<Pilot[]>(`${environment.apiBaseUrl}${this.pilotPath}`);
  }

  getById(id: number) : Observable<Pilot> {
    return this._http.get<Pilot>(`${environment.apiBaseUrl}${this.pilotPath}/${id}`);
  }

  create(pilot: Pilot) : Observable<Pilot> {
    return this._http.post<Pilot>(`${environment.apiBaseUrl}${this.pilotPath}`, pilot);
  }

  update(pilot: Pilot) : Observable<Pilot> {
    return this._http.put<Pilot>(`${environment.apiBaseUrl}${this.pilotPath}/${pilot.id}`, pilot);
  }

  delete(id: number) : Observable<Pilot> {
    return this._http.delete<Pilot>(`${environment.apiBaseUrl}${this.pilotPath}/${id}`);
  }

}
