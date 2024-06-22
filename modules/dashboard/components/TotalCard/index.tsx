import { format } from 'date-fns/format';
import { parseISO } from 'date-fns/parseISO';

import { InfoCircledIcon } from '@radix-ui/react-icons';

import formatPrice from '@/shared/lib/formatPrice';

import { isToday } from 'date-fns/isToday';
import CardStyles from './styles';

interface TotalCardProps {
  date: string;
  value: number;
}

const TotalCard = (props: TotalCardProps) => {
  const { date, value = 0 } = props;

  const isTodayDate = isToday(date);

  const monthName = format(parseISO(date), 'MMMM');
  const formattedDate = format(
    parseISO(date),
    isTodayDate ? 'MMMM dd' : 'MMMM, yyyy'
  );

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
