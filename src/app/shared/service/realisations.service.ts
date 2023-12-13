import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Realisation} from "../model/realisation.model";


@Injectable({
  providedIn: 'root'
})
export class RealisationsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResponse<Realisation[]>> {
    return this.http.get<Realisation[]>('https://angular-api.bes-webdeveloper-seraing.be/api/realisations',{observe:"response"})
  }
}
