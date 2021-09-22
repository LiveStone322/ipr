export interface SortingOptions {
  type: SortingTypes;
  itemTypes: ItemTypes;
}

export enum SortingTypes {
  Asc = 1,
  Desc,
  None,
}

export enum ItemTypes {
  String = 1,
  Number,
}
