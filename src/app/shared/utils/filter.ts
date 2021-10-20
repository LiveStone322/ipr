import { TableObject } from '../models/table.model';

export function filterItems(items: TableObject[], filter: string): any[] {
  return items.filter((item) => item.name.includes(filter));
}
