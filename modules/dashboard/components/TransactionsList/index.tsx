import TransactionCard from '../TransactionCard';
import { type TransactionsProps } from '../Transactions';

import ListStyles from './styles';

const TransactionsList = (props: TransactionsProps) => {
  const { filterLabel, transactions } = props;

  const hasTransactions = transactions.length > 0;

  return (
    <ListStyles.Container>
      <ListStyles.Caption>Tus ventas de {filterLabel}</ListStyles.Caption>

      {hasTransactions && (
        <ListStyles.List>
          {transactions.map((transaction) => (
            <ListStyles.ListItem key={transaction.id}>
              <TransactionCard transaction={transaction} />
            </ListStyles.ListItem>
          ))}
        </ListStyles.List>
      )}

      {!hasTransactions && (
        <ListStyles.NoData>
          <h4>No hay datos para mostrar</h4>
        </ListStyles.NoData>
      )}
    </ListStyles.Container>
  );
};

export default TransactionsList;
