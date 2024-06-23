import { useQuery } from '@tanstack/react-query';

import { TABLES_REFETCH_INTERVAL } from '@/shared/lib/constants';
import type { ErrorApiResponse, QueryOptions } from '@/shared/types';

import listTransactions, {
  type Params,
  type TransactionList,
} from '../controllers/listTransactions';
import transactionKeys from './transactionKeys';

type RequestQueryOptions = QueryOptions<
  TransactionList,
  ErrorApiResponse,
  TransactionList,
  ReturnType<typeof transactionKeys.list>
>;

function useListTransactions(params: Params, options?: RequestQueryOptions) {
  const query = useQuery({
    queryKey: transactionKeys.list(params),
    queryFn: (_) => listTransactions(params),
    staleTime: TABLES_REFETCH_INTERVAL,
    refetchInterval: TABLES_REFETCH_INTERVAL,
    ...options,
  });

  return query;
}

export default useListTransactions;
