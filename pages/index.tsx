import { useEffect, useState } from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import dynamic from 'next/dynamic';

import { MixerVerticalIcon } from '@radix-ui/react-icons';

import * as Popover from '@radix-ui/react-popover';

import FilterPopover from '@/dashboard/components/FilterPopover';
import TotalCard from '@/dashboard/components/TotalCard';
import TransactionsList from '@/dashboard/components/TransactionsList';
import { defaultPagination as defaultMetrisPagination } from '@/dashboard/controllers/getMetrics';
import useComputeDateFilterOptions from '@/dashboard/hooks/useComputeDateFilterOptions';
import useGetMetrics from '@/dashboard/hooks/useGetMetrics';
import PageStyles from '@/dashboard/styles/pageStyles';
import type { DateFilter, ParamsFilters } from '@/dashboard/types';

const Transactions = dynamic(
  () => import('@/dashboard/components/Transactions'),
  {
    ssr: false,
    loading: () => <TransactionsList filterLabel="" transactions={[]} />,
  }
);

import {
  Filters,
  defaultFilters,
  defaultPagination,
} from '@/transaction/controllers/listTransactions';
import useListTransactions from '@/transaction/hooks/useListTransactions';
import type { TransactionType } from '@/transaction/types';

import useSyncParams from '@/dashboard/hooks/useSyncParams';
import mapInitialDateFilter from '@/dashboard/lib/mapInitialDateFilter';
import FilterButton from '@/shared/components/FilterButton';
import FilterItem from '@/shared/components/FilterItem';
import FilterList from '@/shared/components/FilterList';
import FilterOption from '@/shared/components/FilterOption';

export const getServerSideProps = (async (context) => {
  const params = context.query;

  return {
    props: {
      dateFilter: (params?.dateFilter || null) as ParamsFilters['dateFilter'],
      transactionType: (params?.transactionType ||
        null) as TransactionType | null,
    },
  };
}) satisfies GetServerSideProps<ParamsFilters>;

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Home(serverProps: PageProps) {
  const {
    dateFilter: initialDateFiler,
    transactionType: initialTransactionType,
  } = serverProps;

  const syncParams = useSyncParams<ParamsFilters>();

  const dateFilterOptions = useComputeDateFilterOptions();

  const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilter>(
    mapInitialDateFilter(initialDateFiler, dateFilterOptions)
  );
  const [filters, setFilters] = useState<Filters>({
    ...defaultFilters,
    startDate: selectedDateFilter.startDate,
    endDate: selectedDateFilter.endDate,
    type: initialTransactionType || defaultFilters.type,
  });

  const metricsQuery = useGetMetrics({
    filterParams: {
      search: '',
      startDate: filters.startDate,
      endDate: filters.endDate,
    },
    paginationParams: defaultMetrisPagination,
    urlParams: {},
  });

  const listQuery = useListTransactions({
    filterParams: filters,
    paginationParams: defaultPagination,
    urlParams: {},
  });

  const transactions = listQuery.data?.results || [];

  const handleSetDateFilter = (dateFilter: DateFilter) => {
    syncParams({ dateFilter: dateFilter.type, transactionType: filters.type });

    setSelectedDateFilter(dateFilter);
    setFilters((p) => ({
      ...p,
      startDate: dateFilter.startDate,
      endDate: dateFilter.endDate,
    }));
  };

  useEffect(() => {
    syncParams({
      dateFilter: selectedDateFilter.type,
      transactionType: filters.type,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only want to run this once
  }, []);

  return (
    <PageStyles.Container>
      <PageStyles.Heading>
        <TotalCard
          filterLabel={selectedDateFilter.label}
          filters={filters}
          value={metricsQuery.data?.data.totalSales || 0}
        />

        <PageStyles.Filters>
          <FilterList>
            {dateFilterOptions.map((df) => (
              <FilterItem key={df.label}>
                <FilterOption
                  type="button"
                  onClick={() => handleSetDateFilter(df)}
                  data-active={selectedDateFilter.type === df.type}
                >
                  {df.label}
                </FilterOption>
              </FilterItem>
            ))}
          </FilterList>

          <Popover.Root>
            <Popover.Trigger asChild>
              <FilterButton type="button">
                Filtrar
                <MixerVerticalIcon />
              </FilterButton>
            </Popover.Trigger>

            <Popover.Portal>
              <FilterPopover
                dateFilter={selectedDateFilter}
                filters={filters}
                setFilters={setFilters}
              />
            </Popover.Portal>
          </Popover.Root>
        </PageStyles.Filters>
      </PageStyles.Heading>

      <Transactions
        filterLabel={selectedDateFilter.label}
        transactions={transactions}
      />
    </PageStyles.Container>
  );
}
