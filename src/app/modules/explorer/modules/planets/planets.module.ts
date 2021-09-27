import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { TableModule } from '../../../../shared/modules/table/table.module';

@NgModule({
  declarations: [PlanetsComponent],
  imports: [CommonModule, PlanetsRoutingModule, TableModule],
})
export class PlanetsModule {}
