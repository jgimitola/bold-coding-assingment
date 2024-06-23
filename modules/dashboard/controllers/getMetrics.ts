import narrowError from '@/shared/lib/narrowError';

import computePaginatedParams from '@/shared/lib/computePaginatedParams';
import verifyApiTypeResponse from '@/shared/lib/verifyApiTypeResponse';
import type {
  ApiResponse,
  FilterParams,
  ListParams,
  PaginationParams,
  QueryController,
} from '@/shared/types';

import localApi from '@/shared/api/localApi';

import metricsDataSchema from '../schemas/metricsDataSchema';
import type { MetricsData } from '../types';

export interface Filters extends FilterParams {
  startDate: string | null;
  endDate: string | null;
}

export const defaultFilters: Filters = {
  search: '',
  startDate: null,
  endDate: null,
};

export interface Pagination extends PaginationParams {}

export const defaultPagination: Pagination = {
  pageIndex: 0,
  pageSize: 20,
};

export type Params = ListParams<Filters, Pagination>;

export type TransactionList = ApiResponse<MetricsData>;

const getMetrics: QueryController<Params, TransactionList> = async (
  params,
  token
) => {
  try {
    const { data } = await localApi.get<TransactionList>('/metrics', {
      headers: { Authorization: Boolean(token) && `Bearer ${token}` },
      params: {
        ...computePaginatedParams(params),
        ...params.filterParams,
        ...params.urlParams,
      },
    });

    await verifyApiTypeResponse(metricsDataSchema, data.data);

    return data;
  } catch (error) {
    throw narrowError(error);
  }
};

export default getMetrics;
