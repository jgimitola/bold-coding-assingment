import { useQuery } from '@tanstack/react-query';

import { TABLES_REFETCH_INTERVAL } from '@/shared/lib/constants';
import type { ErrorApiResponse, QueryOptions } from '@/shared/types';

import getMetrics, {
  type Params,
  type TransactionList,
} from '../controllers/getMetrics';
import dashboardKeys from './dashboardKeys';

type RequestQueryOptions = QueryOptions<
  TransactionList,
  ErrorApiResponse,
  TransactionList,
  ReturnType<typeof dashboardKeys.metrics>
>;

function useGetMetrics(params: Params, options?: RequestQueryOptions) {
  const query = useQuery({
    queryKey: dashboardKeys.metrics(params),
    queryFn: (_) => getMetrics(params),
    staleTime: TABLES_REFETCH_INTERVAL,
    refetchInterval: TABLES_REFETCH_INTERVAL,
    ...options,
  });

  return query;
}

export default useGetMetrics;
