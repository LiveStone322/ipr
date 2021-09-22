import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [CommonModule, SearchBarModule, RouterModule],
})
export class TableModule {}
