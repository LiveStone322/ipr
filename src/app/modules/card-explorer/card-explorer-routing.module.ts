import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardExplorerComponent } from './card-explorer.component';

const routes: Routes = [{ path: '', component: CardExplorerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardExplorerRoutingModule { }
