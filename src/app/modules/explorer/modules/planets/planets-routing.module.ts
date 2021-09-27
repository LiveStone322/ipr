import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { AppModuleIds } from 'src/app/shared/models/app-modules.model';
import { CardComponent } from 'src/app/shared/components/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    children: [
      {
        path: ':id',
        component: CardComponent,
        data: {
          cardType: AppModuleIds.Planets,
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
