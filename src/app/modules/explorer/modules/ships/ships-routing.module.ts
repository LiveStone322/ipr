import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsComponent } from './ships.component';
import { AppModuleIds } from 'src/app/shared/models/app-modules.model';
import { CardComponent } from 'src/app/shared/components/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: ShipsComponent,
    children: [
      {
        path: ':id',
        component: CardComponent,
        data: {
          cardType: AppModuleIds.Ships,
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
