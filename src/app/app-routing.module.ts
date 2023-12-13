import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {TeamComponent} from "./team/team.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'team',
  component: TeamComponent
},
{
  path: 'portfolio',
  component: PortfolioComponent
},
{
  path: 'contact',
  component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
