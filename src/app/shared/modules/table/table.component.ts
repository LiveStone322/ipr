import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppModuleIds } from '../../models/app-modules.model';
import { ItemTypes, SortingTypes } from '../../models/sorting-options.model';
import { Table, TableObject } from '../../models/table.model';
import { RequestResult } from '../../services/request-handler/models';
import { RequestHandlerService } from '../../services/request-handler/request-handler.service';
import { filterItems } from '../../utils/filter';
import { sortItems } from '../../utils/sort';

/*
 *TODO: отделить логику таблицы от данных: вынести cardId и обработку onSelected()
 *TODO: доработать фильтрацию
 */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnDestroy {
  @Input() cardId!: AppModuleIds;
  @Input() useControls: boolean = true;

  checkedIds: string[] = [];
  shownItems: any;
  items: Table = [];
  sortingOptions = SortingTypes;
  totalElements = 0;
  readonly pageLength = 3;

  private filterString: string = '';
  private filteredItems: any;
  private sortingType = SortingTypes.None;
  private ngUnsubscribe$ = new Subject();

  constructor(
    private cd: ChangeDetectorRef,
    private rhs: RequestHandlerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.subscribeToCardData();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  onPageChanged(page: number) {
    this.rhs
      .request({
        id: this.cardId,
        filter: this.filterString,
        pagination: {
          after: page * this.pageLength,
          first: this.pageLength,
        },
      })
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((data: RequestResult) => {
        console.log({ data });
        this.totalElements = data.totalCount;
        this.items = data.elements;
        this.filteredItems = [...this.items];
        this.shownItems = [...this.items];
        this.updateTable();
      });
  }

  onSortChanged(type: SortingTypes): void {
    this.sortingType = type;
    this.updateTable();
  }

  onFilterChanged(filterString: string): void {
    this.filterString = filterString;
    this.filteredItems = filterItems(this.items, filterString);
    this.updateTable();
  }

  onCheckChanged(item: TableObject, checked: boolean) {
    const idx = this.checkedIds.indexOf(item.id);
    if (idx > 0) {
      if (!checked) {
        this.checkedIds.splice(idx, 1);
      }
    } else {
      if (checked) {
        this.checkedIds.push(item.id);
      }
    }
  }

  onSelected(item: TableObject) {
    console.log(`/${this.cardId}`, item.id);
    this.router.navigate([`/${AppModuleIds.CardExplorer}`, this.cardId, item.id], {
      relativeTo: this.route.parent,
    });
  }

  isChecked(item: TableObject): boolean {
    return this.checkedIds.includes(item.id);
  }

  private updateTable(): void {
    this.shownItems = sortItems(this.filteredItems, {
      type: this.sortingType,
      itemTypes: ItemTypes.String,
    });
    this.cd.markForCheck();
  }

  private subscribeToCardData(): void {
    this.rhs
      .request({
        id: this.cardId,
        pagination: {
          first: this.pageLength,
        },
      })
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((data: RequestResult) => {
        console.log({ data });
        this.totalElements = data.totalCount;
        this.items = data.elements;
        this.filteredItems = [...this.items];
        this.shownItems = [...this.items];
      });
  }
}
