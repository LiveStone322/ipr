import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
