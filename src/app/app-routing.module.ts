import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';
import { appLinks } from './shared/models/app-links.model';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: appLinks.explorer.link,
        loadChildren: () =>
          import('./modules/explorer/explorer.module').then((m) => m.ExplorerModule),
      },
    ],
  },
  { path: 'crew', loadChildren: () => import('./modules/crew/crew.module').then(m => m.CrewModule) },
  {
    path: '**',
    redirectTo: appLinks.explorer.link,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
