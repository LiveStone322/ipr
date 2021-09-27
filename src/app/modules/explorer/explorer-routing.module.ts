import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModuleIds } from 'src/app/shared/models/app-modules.model';
import { ExplorerComponent } from './explorer.component';

const routes: Routes = [
  {
    path: '',
    component: ExplorerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: AppModuleIds.Movies,
      },
      {
        path: AppModuleIds.Movies,
        loadChildren: () => import('./modules/movies/movies.module').then((m) => m.MoviesModule),
      },
      {
        path: AppModuleIds.Characters,
        loadChildren: () =>
          import('./modules/characters/characters.module').then((m) => m.CharactersModule),
      },
      {
        path: AppModuleIds.Ships,
        loadChildren: () => import('./modules/ships/ships.module').then((m) => m.ShipsModule),
      },
      {
        path: AppModuleIds.Planets,
        loadChildren: () => import('./modules/planets/planets.module').then((m) => m.PlanetsModule),
      },
      {
        path: AppModuleIds.Race,
        loadChildren: () => import('./modules/race/race.module').then((m) => m.RaceModule),
      },
      {
        path: '**',
        redirectTo: AppModuleIds.Movies,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorerRoutingModule {}
