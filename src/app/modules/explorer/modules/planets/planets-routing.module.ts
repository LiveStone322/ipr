import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { appLinks } from 'src/app/shared/models/app-links.model';
import { CardComponent } from 'src/app/shared/shared-components/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    children: [
      {
        path: ':id',
        component: CardComponent,
        data: {
          cardType: appLinks.planets.link,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
