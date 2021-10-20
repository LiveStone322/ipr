import { PaginationParameters } from './pagination-parameters.model';

export interface RequestParameters {
  id: string;
  filter?: string;
  pagination?: PaginationParameters;
}
