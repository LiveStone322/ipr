import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appLinks } from 'src/app/shared/models/app-links.model';
import { CardComponent } from 'src/app/shared/shared-components/card/card.component';
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
          cardType: appLinks.characters.link,
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
