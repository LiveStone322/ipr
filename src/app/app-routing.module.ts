import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';
import { AppModuleIds } from './shared/models/app-modules.model';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: AppModuleIds.Explorer,
        loadChildren: () =>
          import('./modules/explorer/explorer.module').then((m) => m.ExplorerModule),
      },
      {
        path: AppModuleIds.CardExplorer + '/:entity/:id',
        loadChildren: () =>
          import('./modules/card-explorer/card-explorer.module').then((m) => m.CardExplorerModule),
      },
    ],
  },

  {
    path: 'crew',
    loadChildren: () => import('./modules/crew/crew.module').then((m) => m.CrewModule),
  },
  {
    path: '**',
    redirectTo: AppModuleIds.Explorer,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
