interface TableObjectBase {
  id: string;
  name: string;
}

export interface TableObject extends TableObjectBase {
  [key: string]: any;
}

export type Table = TableObject[];
