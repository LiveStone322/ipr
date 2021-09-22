import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { ItemTypes, SortingTypes } from '../../models/sorting-options.model';
import { filterItems } from '../../utils/filter';
import { sortItems } from '../../utils/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() items: any;

  private filteredItems: any;
  private sortingType = SortingTypes.None;

  shownItems: any;

  sortingOptions = SortingTypes;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.filteredItems = [...this.items];
    this.shownItems = [...this.items];
  }

  onSortChanged(type: SortingTypes): void {
    this.sortingType = type;
    this.updateTable();
  }

  onFilterChanged(filterString: string): void {
    this.filteredItems = filterItems(this.items, filterString);
    this.updateTable();
  }

  private updateTable(): void {
    this.shownItems = sortItems(this.filteredItems, {
      type: this.sortingType,
      itemTypes: ItemTypes.String,
    });
    this.cd.markForCheck();
  }
}
