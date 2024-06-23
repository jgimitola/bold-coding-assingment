import { InfoCircledIcon } from '@radix-ui/react-icons';

import { Filters } from '@/transaction/controllers/listTransactions';

import useComputeDisplayedDate from '@/dashboard/hooks/useComputeDisplayedDate';

import formatPrice from '@/shared/lib/formatPrice';

import CardStyles from './styles';

interface TotalCardProps {
  filterLabel: string;
  filters: Filters;
  value: number;
}

const TotalCard = (props: TotalCardProps) => {
  const { filterLabel, filters, value = 0 } = props;

  if (!filters.startDate || !filters.endDate)
    throw new Error('Dates should be constrained');

  const formattedDate = useComputeDisplayedDate({
    startDate: filters.startDate,
    endDate: filters.endDate,
  });

  return (
    <CardStyles.Container>
      <CardStyles.Header>
        <CardStyles.Title>Total de ventas de {filterLabel}</CardStyles.Title>

        <InfoCircledIcon />
      </CardStyles.Header>

      <CardStyles.Content>
        <CardStyles.Price>
          <span>{formatPrice(value)}</span>
        </CardStyles.Price>
        <CardStyles.Date>
          <span>{formattedDate}</span>
        </CardStyles.Date>
      </CardStyles.Content>
    </CardStyles.Container>
  );
};

export default TotalCard;
