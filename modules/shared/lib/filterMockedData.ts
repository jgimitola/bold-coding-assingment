import { isWithinInterval } from 'date-fns/isWithinInterval';

import mockedData from '@/transaction/lib/mockedData';
import type { TransactionType } from '@/transaction/types';

import applyLimitAndOffset from './applyLimitAndOffset';

const veryEarlyDate = new Date(-8640000000000000); // JavaScript's earliest representable date
const veryFarFutureDate = new Date(8640000000000000); // JavaScript's farthest representable date

const filterMockedData = (
  limit: number,
  offset: number,
  startDate: string | undefined,
  endDate: string | undefined,
  type: TransactionType | undefined
) => {
  const filteredData = applyLimitAndOffset(mockedData, limit, offset)
    .filter((d) =>
      isWithinInterval(d.createdAt, {
        start: startDate || veryEarlyDate,
        end: endDate || veryFarFutureDate,
      })
    )
    .filter((d) => (type ? type === d.type : true));

  return filteredData;
};

export default filterMockedData;
