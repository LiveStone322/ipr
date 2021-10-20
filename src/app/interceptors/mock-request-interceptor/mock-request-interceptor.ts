import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppModuleIds } from 'src/app/shared/models/app-modules.model';
import { MOVIES, CHARACTERS, SHIPS, PLANETS, RACE } from './data/tables';
import { Table } from 'src/app/shared/models/table.model';
import {
  PaginationParameters,
  RawRequestResult,
} from 'src/app/shared/services/request-handler/models';
@Injectable()
export class MockRequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('debugging request', req);

    try {
      return of(
        new HttpResponse({
          status: 200,
          body: this.processTable(req.body.id, req.body.pagination),
        }),
      );
    } catch (err) {
      return of(new HttpResponse({ status: 500, body: { message: 'error' } }));
    }
  }

  private processTable(id: string, pagination: PaginationParameters = {}): RawRequestResult {
    let table: Table = [];

    table = this.getTable(id);

    return this.pageTable(id, table, pagination);
  }

  private getTable(id: string): Table {
    switch (id) {
      case AppModuleIds.Movies:
        return MOVIES;
      case AppModuleIds.Characters:
        return CHARACTERS;
      case AppModuleIds.Ships:
        return SHIPS;
      case AppModuleIds.Planets:
        return PLANETS;
      case AppModuleIds.Race:
        return RACE;
      default:
        return [];
    }
  }

  private pageTable(id: string, table: Table, pagination: PaginationParameters): RawRequestResult {
    const afterBeforeSlice = table.slice(pagination.after ?? 0, pagination.before ?? table.length);
    const resultTable = pagination.first
      ? afterBeforeSlice.slice(0, pagination.first)
      : pagination.last
      ? afterBeforeSlice.slice(table.length - pagination.last)
      : afterBeforeSlice;

    return <any>{
      totalCount: table.length,
      pageInfo: {
        hasNextPage:
          table.length > 0 &&
          resultTable.length > 0 &&
          table[table.length - 1].name !== resultTable[resultTable.length - 1].name,
        hasPreviousPage:
          table.length > 0 && resultTable.length > 0 && table[0].name !== resultTable[0].name,
        startCursor:
          (table.length > 0 &&
            resultTable.length > 0 &&
            table.findIndex((x) => x.name === resultTable[0].name)) ||
          0,
        endCursor:
          (table.length > 0 &&
            resultTable.length > 0 &&
            table.findIndex((x) => x.name === resultTable[resultTable.length - 1].name)) ||
          0,
      },
      [id]: resultTable,
    };
  }
}
