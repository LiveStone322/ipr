import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsComponent } from './ships.component';
import { appLinks } from 'src/app/shared/models/app-links.model';
import { CardComponent } from 'src/app/shared/shared-components/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: ShipsComponent,
    children: [
      {
        path: ':id',
        component: CardComponent,
        data: {
          cardType: appLinks.ships.link,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipsRoutingModule {}
