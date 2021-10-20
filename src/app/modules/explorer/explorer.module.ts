import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorerRoutingModule } from './explorer-routing.module';
import { ExplorerComponent } from './explorer.component';
import { CardModule } from 'src/app/shared/modules/card/card.module';
import { TableModule } from 'src/app/shared/modules/table/table.module';

@NgModule({
  declarations: [ExplorerComponent],
  imports: [CommonModule, ExplorerRoutingModule, CardModule, TableModule],
})
export class ExplorerModule {}
