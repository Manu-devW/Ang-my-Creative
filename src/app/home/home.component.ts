import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../shared/service/service.service";
import {Service} from "../shared/model/service.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  services: Service[] = [];
  constructor(public serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.serviceService.getAll()
      .subscribe(serviceResponse => this.services = serviceResponse)
    }
}
