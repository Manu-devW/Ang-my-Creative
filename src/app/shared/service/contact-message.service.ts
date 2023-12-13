import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContactMessage} from "../model/contact-message.model";


@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {

  constructor(private http: HttpClient) { }

  postMessage(contactMessage: ContactMessage): Observable<HttpResponse<ContactMessage>> {

  return this.http.post<ContactMessage>
  ('https://angular-api.bes-webdeveloper-seraing.be/api/contact-messages',
    contactMessage, {observe: 'response'});
  }
}
