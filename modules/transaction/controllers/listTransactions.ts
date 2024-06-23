import narrowError from '@/shared/lib/narrowError';

import computePaginatedParams from '@/shared/lib/computePaginatedParams';
import verifyApiTypeResponse from '@/shared/lib/verifyApiTypeResponse';
import type {
  FilterParams,
  ListParams,
  PaginatedResponse,
  PaginationParams,
  QueryController,
} from '@/shared/types';

import localApi from '@/shared/api/localApi';

import transactionDataSchema from '../schemas/transactionDataSchema';
import type { TransactionData } from '../types';

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

export type TransactionList = PaginatedResponse<TransactionData>;

const listTransactions: QueryController<Params, TransactionList> = async (
  params,
  token
) => {
  try {
    const { data } = await localApi.get<TransactionList>('/transaction', {
      headers: { Authorization: Boolean(token) && `Bearer ${token}` },
      params: {
        ...computePaginatedParams(params),
        ...params.urlParams,
      },
    });

    await verifyApiTypeResponse(transactionDataSchema, data.results, true);

    return data;
  } catch (error) {
    throw narrowError(error);
  }
};

export default listTransactions;
