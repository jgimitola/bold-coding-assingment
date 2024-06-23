import { type QueryKey, type UseQueryOptions } from '@tanstack/react-query';

export type Palette = {
  white: string;
  black: string;
  blue: string;
  red: string;
  darkGray: string;
  lightGray: string;
  background: string;
};

export type MediaQuery = {
  md: string;
};

/**
 * Utility types
 *
 * @see https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object
 */
export type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never
        ? ''
        : `.${Leaves<T[K]>}`}`;
    }[keyof T]
  : never;

/**
 * Utility types
 *
 * @see https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object
 */
export type Paths<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${Paths<T[K]>}`}`;
    }[keyof T]
  : never;

export type QueryController<Payload, Response> = (
  payload: Payload,
  token?: string
) => Promise<Response> | never;

export type MutationController<Payload, Response> = (
  payload: Payload
) => Promise<Response> | never;

export interface ErrorApiResponse {
  error: true;
  message: string;
  errorObject?: unknown;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ApiResponse<T> {
  error: false;
  message?: string;
  data: T;
}

export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

export interface FilterParams {
  search: string;
}

export interface PaginationParams extends PaginationState {
  pageParam?: number;
}

export type UrlParams = Record<string, string>;

export interface ListParams<
  T extends FilterParams = FilterParams,
  V extends PaginationParams = PaginationParams
> {
  filterParams: T;
  paginationParams: V;
  urlParams: UrlParams;
}

export type QueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryFn' | 'queryKey'
>;
