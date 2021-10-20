export interface PaginationParameters {
  after?: number; //TODO: при переходе на GraphQL поменять на string
  first?: number;
  before?: number;
  last?: number;
}
