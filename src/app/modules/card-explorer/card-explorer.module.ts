import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardExplorerRoutingModule } from './card-explorer-routing.module';
import { CardExplorerComponent } from './card-explorer.component';


@NgModule({
  declarations: [
    CardExplorerComponent
  ],
  imports: [
    CommonModule,
    CardExplorerRoutingModule
  ]
})
export class CardExplorerModule { }
