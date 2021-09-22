import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appLinks } from 'src/app/shared/models/app-links.model';
import { ExplorerComponent } from './explorer.component';

const routes: Routes = [
  {
    path: '',
    component: ExplorerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: appLinks.movies.link,
      },
      {
        path: appLinks.movies.link,
        loadChildren: () => import('./modules/movies/movies.module').then((m) => m.MoviesModule),
      },
      {
        path: appLinks.characters.link,
        loadChildren: () =>
          import('./modules/characters/characters.module').then((m) => m.CharactersModule),
      },
      {
        path: appLinks.ships.link,
        loadChildren: () => import('./modules/ships/ships.module').then((m) => m.ShipsModule),
      },
      {
        path: appLinks.planets.link,
        loadChildren: () => import('./modules/planets/planets.module').then((m) => m.PlanetsModule),
      },
      {
        path: appLinks.race.link,
        loadChildren: () => import('./modules/race/race.module').then((m) => m.RaceModule),
      },
      {
        path: '**',
        redirectTo: appLinks.movies.link,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorerRoutingModule {}
