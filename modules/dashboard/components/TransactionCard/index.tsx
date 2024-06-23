import type { TransactionData } from '@/transaction/types';

import { formatDateHour } from '@/shared/lib/dateHelpers';
import formatCardNumber from '@/shared/lib/formatCardNumber';
import formatPrice from '@/shared/lib/formatPrice';

import CardStyles from './styles';

interface TotalCardProps {
  transaction: TransactionData;
}

const TransactionCard = (props: TotalCardProps) => {
  const { transaction } = props;

  return (
    <CardStyles.Container>
      <CardStyles.InfoItem>
        <CardStyles.Label>Transacción</CardStyles.Label>
        <CardStyles.Value>
          {transaction.state === 'SUCCESS'
            ? 'Cobro exitoso'
            : 'Cobro no realizado'}
        </CardStyles.Value>
      </CardStyles.InfoItem>

      <CardStyles.InfoItem>
        <CardStyles.Label>Fecha y hora</CardStyles.Label>
        <CardStyles.Value>
          {formatDateHour(transaction.createdAt)}
        </CardStyles.Value>
      </CardStyles.InfoItem>

      <CardStyles.InfoItem>
        <CardStyles.Label>Método de pago</CardStyles.Label>
        <CardStyles.Value>
          {formatCardNumber(`${transaction.value}`)}
        </CardStyles.Value>
      </CardStyles.InfoItem>

      <CardStyles.InfoItem>
        <CardStyles.Label>ID transacción Bold</CardStyles.Label>
        <CardStyles.Value>{transaction.boldId}</CardStyles.Value>
      </CardStyles.InfoItem>

      <CardStyles.InfoItem>
        <CardStyles.Label>Monto</CardStyles.Label>
        <CardStyles.Value>{formatPrice(transaction.value)}</CardStyles.Value>
      </CardStyles.InfoItem>

      {transaction.commission !== 0 && (
        <CardStyles.InfoItem>
          <CardStyles.Label>Deducción Bold</CardStyles.Label>
          <CardStyles.Value data-comission>
            -{formatPrice(transaction.commission)}
          </CardStyles.Value>
        </CardStyles.InfoItem>
      )}
    </CardStyles.Container>
  );
};

export default TransactionCard;
