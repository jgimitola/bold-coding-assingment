import Body from '@/shared/components/Table/Body';
import BodyCell from '@/shared/components/Table/BodyCell';
import Caption from '@/shared/components/Table/Caption';
import Container from '@/shared/components/Table/Container';
import Head from '@/shared/components/Table/Head';
import HeadCell from '@/shared/components/Table/HeadlCell';
import Row from '@/shared/components/Table/Row';
import Wrapper from '@/shared/components/Table/Wrapper';
import { formatDateHour } from '@/shared/lib/dateHelpers';
import formatCardNumber from '@/shared/lib/formatCardNumber';
import formatPrice from '@/shared/lib/formatPrice';

import type { TransactionsProps } from '../Transactions';
import ListStyles from '../TransactionsList/styles';
import TableStyles from './styles';

const TransactionsTable = (props: TransactionsProps) => {
  const { filterLabel, transactions } = props;

  const hasTransactions = transactions.length > 0;

  if (!hasTransactions)
    return (
      <Wrapper>
        <ListStyles.Container>
          <ListStyles.Caption>Tus ventas de {filterLabel}</ListStyles.Caption>

          <ListStyles.NoData>
            <h4>No hay datos para mostrar</h4>
          </ListStyles.NoData>
        </ListStyles.Container>
      </Wrapper>
    );

  return (
    <Wrapper>
      <Container>
        <Caption>Tus ventas de {filterLabel}</Caption>

        <Head>
          <Row>
            <HeadCell>Transacción</HeadCell>
            <HeadCell>Fecha y hora</HeadCell>
            <HeadCell>Método de pago</HeadCell>
            <HeadCell>ID transacción Bold</HeadCell>
            <HeadCell>Monto</HeadCell>
          </Row>
        </Head>

        <Body>
          {transactions.map((transaction) => (
            <Row key={transaction.id}>
              <BodyCell data-success={transaction.state === 'SUCCESS'}>
                {transaction.state === 'SUCCESS'
                  ? 'Cobro exitoso'
                  : 'Cobro no realizado'}
              </BodyCell>
              <BodyCell>{formatDateHour(transaction.createdAt)}</BodyCell>
              <BodyCell>{formatCardNumber(`${transaction.value}`)}</BodyCell>
              <BodyCell>{transaction.boldId}</BodyCell>
              <BodyCell>
                <TableStyles.Value>
                  {formatPrice(transaction.value)}
                </TableStyles.Value>

                {transaction.commission !== 0 && (
                  <>
                    <TableStyles.Concept>Deducción Bold</TableStyles.Concept>
                    <TableStyles.Comission>
                      -{formatPrice(transaction.commission)}
                    </TableStyles.Comission>
                  </>
                )}
              </BodyCell>
            </Row>
          ))}
        </Body>
      </Container>
    </Wrapper>
  );
};

export default TransactionsTable;
