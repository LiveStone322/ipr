import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationBarComponent implements OnInit {
  @Input() totalElements: number = 0;
  @Input() paginationLength: number = 5;
  @Input() initialPage: number = 0;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  curPage!: number;

  constructor() {}

  ngOnInit(): void {
    this.curPage = this.initialPage;
  }

  onPageChanged(delta: number): void {
    this.curPage += delta;
    if (this.curPage < 0) {
      this.curPage = 0;
    }
    if (this.paginationLength * this.curPage >= this.totalElements - this.paginationLength) {
      this.curPage = Math.floor(this.totalElements / this.paginationLength);
    }
    this.pageChanged.emit(this.curPage);
  }
}
