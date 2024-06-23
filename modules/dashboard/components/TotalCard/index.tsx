import { isToday } from 'date-fns/isToday';

import { InfoCircledIcon } from '@radix-ui/react-icons';

import {
  formatMonth,
  formatMonthDay,
  formatMonthYear,
} from '@/shared/lib/dateHelpers';
import formatPrice from '@/shared/lib/formatPrice';

import CardStyles from './styles';

interface TotalCardProps {
  date: string;
  value: number;
}

const TotalCard = (props: TotalCardProps) => {
  const { date, value = 0 } = props;

  const isTodayDate = isToday(date);

  const monthName = formatMonth(date);
  const formattedDate = isTodayDate
    ? formatMonthDay(date)
    : formatMonthYear(date);

  return (
    <CardStyles.Container>
      <CardStyles.Header>
        <CardStyles.Title>
          Total de ventas de {isTodayDate ? 'Hoy' : monthName}
        </CardStyles.Title>

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
