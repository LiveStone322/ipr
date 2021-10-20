import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AppModuleIds } from '../../models/app-modules.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
