import { useState } from 'react';

import dynamic from 'next/dynamic';

import { MixerVerticalIcon } from '@radix-ui/react-icons';

import * as Popover from '@radix-ui/react-popover';

import TotalCard from '@/dashboard/components/TotalCard';
import { defaultPagination as defaultMetrisPagination } from '@/dashboard/controllers/getMetrics';
import useComputeDateFilterOptions from '@/dashboard/hooks/useComputeDateFilterOptions';
import useGetMetrics from '@/dashboard/hooks/useGetMetrics';
import PageStyles from '@/dashboard/styles/pageStyles';
import type { DateFilter } from '@/dashboard/types';

import {
  Filters,
  defaultFilters,
  defaultPagination,
} from '@/transaction/controllers/listTransactions';
import useListTransactions from '@/transaction/hooks/useListTransactions';

const Transactions = dynamic(
  () => import('@/dashboard/components/Transactions'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

import FilterButton from '@/shared/components/FilterButton';
import FilterItem from '@/shared/components/FilterItem';
import FilterList from '@/shared/components/FilterList';
import FilterOption from '@/shared/components/FilterOption';
import FilterPopover from '@/dashboard/components/FilterPopover';

export default function Home() {
  const dateFilterOptions = useComputeDateFilterOptions();

  const [selectedOptionLabel, setSelectedOptionLabel] = useState(
    dateFilterOptions[0].label
  );
  const [filters, setFilters] = useState<Filters>({
    ...defaultFilters,
    startDate: dateFilterOptions[0].startDate,
    endDate: dateFilterOptions[0].endDate,
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
    setSelectedOptionLabel(dateFilter.label);
    setFilters((p) => ({
      ...p,
      startDate: dateFilter.startDate,
      endDate: dateFilter.endDate,
    }));
  };

  return (
    <PageStyles.Container>
      <PageStyles.Heading>
        <TotalCard
          filterLabel={selectedOptionLabel}
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
                  data-active={selectedOptionLabel === df.label}
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
              <FilterPopover filters={filters} setFilters={setFilters} />
            </Popover.Portal>
          </Popover.Root>
        </PageStyles.Filters>
      </PageStyles.Heading>

      <Transactions
        filterLabel={selectedOptionLabel}
        transactions={transactions}
      />
    </PageStyles.Container>
  );
}
