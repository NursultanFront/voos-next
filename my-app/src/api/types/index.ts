export type Filters = {
  type: 'News' | 'Advice' | 'Reviews' | 'Versus' | 'Unboxing' | 'Cultivation';
};

export type Sort = {
  sortByCreate: 'createdAt%3Adesc' | 'createdAt%3Aasc';
};

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export type ListOf<T> = {
  data: T[];
} & Meta;
