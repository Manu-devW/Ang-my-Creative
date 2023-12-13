import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "../model/service.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }

  getAll(): Observable<Service[]>{
    // @ts-ignore
    return this.http.get<Service[]>(
      'https://angular-api.bes-webdeveloper-seraing.be/api/services'
    )
  }
}
