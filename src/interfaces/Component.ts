export interface TableModel {
  id: string;
  name: string;
  type: string,
  search: boolean;
  searchKey?: string;
  data: Array<any>;
  action: []
}

export interface ButtonModel {
  id: string;
  name: string;
  type: string,
  url?: string
}
