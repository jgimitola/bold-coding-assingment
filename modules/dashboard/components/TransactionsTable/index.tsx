import { formatDateHour } from '@/shared/lib/dateHelpers';
import formatCardNumber from '@/shared/lib/formatCardNumber';
import formatPrice from '@/shared/lib/formatPrice';

import type { TransactionsProps } from '../Transactions';

const TransactionsTable = (props: TransactionsProps) => {
  const { filterLabel, transactions } = props;

  return (
    <table>
      <caption>Tus ventas de {filterLabel}</caption>

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
  );
};

export default TransactionsTable;
