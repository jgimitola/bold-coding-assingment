import { useMediaQuery } from '@uidotdev/usehooks';

import { TransactionData } from '@/transaction/types';

import mq from '@/shared/lib/mq';
import TransactionsList from '../TransactionsList';
import TransactionsTable from '../TransactionsTable';

export interface TransactionsProps {
  filterLabel: string;
  transactions: TransactionData[];
}

const Transactions = (props: TransactionsProps) => {
  const { filterLabel, transactions } = props;

  const isMediumDevice = useMediaQuery(`only screen and (${mq('md')})`);

  if (isMediumDevice)
    return (
      <TransactionsList filterLabel={filterLabel} transactions={transactions} />
    );

  return (
    <TransactionsTable filterLabel={filterLabel} transactions={transactions} />
  );
};

export default Transactions;
