import { useState } from 'react';

import { MixerVerticalIcon } from '@radix-ui/react-icons';

import TotalCard from '@/dashboard/components/TotalCard';
import PageStyles from '@/dashboard/styles/pageStyles';

import {
  defaultFilters,
  defaultPagination,
} from '@/transaction/controllers/listTransactions';
import useListTransactions from '@/transaction/hooks/useListTransactions';

import FilterButton from '@/shared/components/FilterButton';
import FilterItem from '@/shared/components/FilterItem';
import FilterList from '@/shared/components/FilterList';
import FilterOption from '@/shared/components/FilterOption';
import { formatDateHour } from '@/shared/lib/dateHelpers';
import formatCardNumber from '@/shared/lib/formatCardNumber';
import formatPrice from '@/shared/lib/formatPrice';

export default function Home() {
  const [filters, setFilters] = useState(defaultFilters);

  const sellings = {
    value: 1250000,
    date: '2024-06-22T15:36:52-05:00',
  };

  const listQuery = useListTransactions({
    filterParams: filters,
    paginationParams: defaultPagination,
    urlParams: {},
  });

  const transactions = listQuery.data?.results || [];

  const hasTransactions = transactions.length > 0;

  return (
    <PageStyles.Container>
      <PageStyles.Heading>
        <TotalCard {...sellings} />

        <PageStyles.Filters>
          <FilterList>
            <FilterItem>
              <FilterOption type="button">Hoy</FilterOption>
            </FilterItem>

            <FilterItem>
              <FilterOption type="button">Esta semana</FilterOption>
            </FilterItem>

            <FilterItem>
              <FilterOption type="button">Septiembre</FilterOption>
            </FilterItem>
          </FilterList>

          <FilterButton type="button">
            Filtrar
            <MixerVerticalIcon />
          </FilterButton>
        </PageStyles.Filters>
      </PageStyles.Heading>

      <table>
        <caption>Tus ventas de septiembre</caption>

        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                {transaction.state === 'SUCCESS'
                  ? 'Cobro exitoso'
                  : 'Cobro no realizado'}
              </td>
              <td>{formatDateHour(transaction.createdAt)}</td>
              <td>{formatCardNumber(`${transaction.value}`)}</td>
              <td>{transaction.boldId}</td>
              <td>{formatPrice(transaction.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageStyles.Container>
  );
}
