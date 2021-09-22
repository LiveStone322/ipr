import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewRoutingModule } from './crew-routing.module';
import { CrewComponent } from './crew.component';


@NgModule({
  declarations: [
    CrewComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule
  ]
})
export class CrewModule { }
