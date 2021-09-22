import { ItemTypes, SortingOptions, SortingTypes } from '../models/sorting-options.model';

export function sortItems(items: any[], options: SortingOptions): string[] {
  if (options.type === SortingTypes.None) {
    return items;
  }
  switch (options.itemTypes) {
    case ItemTypes.String: {
      if (options.type === SortingTypes.Asc) return items.sort((a, b) => a.localeCompare(b));
      return items.sort((a, b) => -a.localeCompare(b));
    }
    case ItemTypes.Number: {
      if (options.type === SortingTypes.Asc) return items.sort((a, b) => a - b);
      return items.sort((a, b) => b - a);
    }
    default:
      return [];
  }
}
