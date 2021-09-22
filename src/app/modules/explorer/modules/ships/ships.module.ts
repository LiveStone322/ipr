import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipsRoutingModule } from './ships-routing.module';
import { ShipsComponent } from './ships.component';
import { TableModule } from '../../../../shared/shared-modules/table/table.module';

@NgModule({
  declarations: [ShipsComponent],
  imports: [CommonModule, ShipsRoutingModule, TableModule],
})
export class ShipsModule {}
