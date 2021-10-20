import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TableObject } from 'src/app/shared/models/table.model';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableItemComponent implements OnInit, OnDestroy {
  @Input() useControls = true;
  @Input() initialChecked = false;
  @Input() data!: TableObject;
  @Output() checkChanged = new EventEmitter<boolean>();
  @Output() selected = new EventEmitter();

  checkboxControl = new FormControl();
  ngUnsubscribe$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    if (this.useControls && this.initialChecked) {
      this.checkboxControl.patchValue(this.initialChecked, { emitEvent: false });
    }
    if (this.useControls) {
      this.checkboxControl.valueChanges.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((value) => {
        this.checkChanged.emit(value);
      });
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
