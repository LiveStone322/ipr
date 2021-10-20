import { AppModuleIds } from 'src/app/shared/models/app-modules.model';
import { Table } from 'src/app/shared/models/table.model';

export type RawRequestResult = {
  [key in
    | AppModuleIds.Characters
    | AppModuleIds.Crew
    | AppModuleIds.Explorer
    | AppModuleIds.Movies
    | AppModuleIds.Planets
    | AppModuleIds.Race
    | AppModuleIds.Ships]: Table;
} & {
  totalCount: number;
  pageInfo: RequestResultPageInfo;
};

export type RequestResult = {
  totalCount: number;
  pageInfo: RequestResultPageInfo;
  elements: Table;
};

export interface RequestResultPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: number;
  endCursor: number;
}
