import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { RouterModule } from '@angular/router';
import { TableItemComponent } from './components/table-item/table-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationBarModule } from '../pagination-bar/pagination-bar.module';

@NgModule({
  declarations: [TableComponent, TableItemComponent],
  exports: [TableComponent],
  imports: [
    CommonModule,
    SearchBarModule,
    PaginationBarModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
})
export class TableModule {}
