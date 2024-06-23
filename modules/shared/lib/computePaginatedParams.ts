import type { FilterParams, ListParams, PaginationParams } from '../types';

function computePaginatedParams<
  T extends FilterParams,
  V extends PaginationParams
>(params: ListParams<T, V>) {
  const { pageIndex, pageSize } = params.paginationParams;

  return {
    search: params.filterParams.search,
    limit: pageSize,
    offset: pageIndex * pageSize,
  };
}

export default computePaginatedParams;
