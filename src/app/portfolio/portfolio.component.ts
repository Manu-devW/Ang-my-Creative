import { Component } from '@angular/core';
import {Realisation} from "../shared/model/realisation.model";
import {RealisationsService} from "../shared/service/realisations.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  realisations: Realisation[] = [];


  constructor(private realisationsService: RealisationsService) {
    this.realisationsService.getAll()
      .subscribe(response => {
        this.realisations = response.body ?? [];

        // Tous les blocs ci-dessous font la même chose
        // this.realisations = response.body === null ? [] : response.body;

        // if(response.body === null {
        //   this this.realisations = [];
        // }else {
        //   this.realisations = response.body;
        // }
        // })
        //
      });
    }

  protected readonly Realisation = Realisation;
}

