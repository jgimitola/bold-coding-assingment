import { MixerVerticalIcon } from '@radix-ui/react-icons';

import TotalCard from '@/dashboard/components/TotalCard';
import PageStyles from '@/dashboard/styles/pageStyles';

import FilterButton from '@/shared/components/FilterButton';
import FilterItem from '@/shared/components/FilterItem';
import FilterList from '@/shared/components/FilterList';
import FilterOption from '@/shared/components/FilterOption';

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

      <table></table>
    </PageStyles.Container>
  );
}
