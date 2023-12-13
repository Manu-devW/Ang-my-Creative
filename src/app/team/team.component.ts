import {Component, OnInit} from '@angular/core';
import {Team} from "../shared/model/team.model";
import {TeamService} from "../shared/service/team.service";


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{

  services: Team[] = [];


  constructor(public serviceTeam: TeamService) {
  }

  ngOnInit(): void {
    this.serviceTeam.getAll()
      .subscribe(teamResponse =>this.services = teamResponse)
  }

}
