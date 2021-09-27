import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceRoutingModule } from './race-routing.module';
import { RaceComponent } from './race.component';
import { TableModule } from '../../../../shared/modules/table/table.module';

@NgModule({
  declarations: [RaceComponent],
  imports: [CommonModule, RaceRoutingModule, TableModule],
})
export class RaceModule {}
