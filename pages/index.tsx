import { MixerVerticalIcon } from '@radix-ui/react-icons';

import TotalCard from '@/dashboard/components/TotalCard';
import PageStyles from '@/dashboard/styles/pageStyles';

import FilterButton from '@/shared/components/FilterButton';
import FilterItem from '@/shared/components/FilterItem';
import FilterList from '@/shared/components/FilterList';
import FilterOption from '@/shared/components/FilterOption';
import formatPrice from '@/shared/lib/formatPrice';

export default function Home() {
  const sellings = {
    value: 1250000,
    date: '2024-06-22T15:36:52-05:00',
  };

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
          <tr>
            <td>Cobro exitoso</td>
            <td>2024-06-22T15:36:52-05:00</td>
            <td>**** **** **** 7711</td>
            <td>ABD233KJK312</td>
            <td>{formatPrice(25000)}</td>
          </tr>
        </tbody>
      </table>
    </PageStyles.Container>
  );
}
