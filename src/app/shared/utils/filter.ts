export function filterItems(items: any[], filter: string): any[] {
  return items.filter((item) => item.includes(filter));
}
