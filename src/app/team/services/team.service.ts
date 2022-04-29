import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from 'src/app/core/models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private readonly teamPath: string = '/teams';

  constructor(private _http :HttpClient) { }

  get() : Observable<Team[]> {
    return this._http.get<Team[]>(`${environment.apiBaseUrl}${this.teamPath}`);
  }

  getById(id: number) : Observable<Team> {
    return this._http.get<Team>(`${environment.apiBaseUrl}${this.teamPath}/${id}`);
  }

  create(team: Team) : Observable<Team> {
    return this._http.post<Team>(`${environment.apiBaseUrl}${this.teamPath}`, team);
  }

  update(team: Team) : Observable<Team> {
    return this._http.put<Team>(`${environment.apiBaseUrl}${this.teamPath}/${team.id}`, team);
  }

  delete(id: number) : Observable<Team> {
    return this._http.delete<Team>(`${environment.apiBaseUrl}${this.teamPath}/${id}`);
  }

}
