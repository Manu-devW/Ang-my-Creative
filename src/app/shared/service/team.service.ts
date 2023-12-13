import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../model/team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(public http: HttpClient) { }

  getAll(): Observable<Team[]>{
    return this.http.get<Team[]>(
      'https://angular-api.bes-webdeveloper-seraing.be/api/team-members'
    )
  }
}
