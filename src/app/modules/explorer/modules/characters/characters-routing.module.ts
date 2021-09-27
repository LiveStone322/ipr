import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModuleIds } from 'src/app/shared/models/app-modules.model';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      {
        path: ':id',
        component: CardComponent,
        data: {
          cardType: AppModuleIds.Characters,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
