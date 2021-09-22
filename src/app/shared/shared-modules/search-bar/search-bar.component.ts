import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() filterChanged = new EventEmitter<string>();

  private ngUnsubscribe$ = new Subject();

  control: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.control.valueChanges.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((value) => {
      this.filterChanged.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
