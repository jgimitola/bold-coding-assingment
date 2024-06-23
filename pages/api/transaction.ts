import type { NextApiRequest, NextApiResponse } from 'next';

import { isWithinInterval } from 'date-fns/isWithinInterval';

import applyLimitAndOffset from '@/shared/lib/applyLimitAndOffset';

import mockedData from '@/transaction/lib/mockedData';

const veryEarlyDate = new Date(-8640000000000000); // JavaScript's earliest representable date
const veryFarFutureDate = new Date(8640000000000000); // JavaScript's farthest representable date

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(200).json({
      error: true,
      message: 'Method not supported yet',
      data: null,
    });
  }

  const limit = Number(req.query.limit);
  const offset = Number(req.query.offset);

  const startDate = req.query.startDate as string | undefined;
  const endDate = req.query.endDate as string | undefined;

  const filteredData = applyLimitAndOffset(mockedData, limit, offset).filter(
    (d) =>
      isWithinInterval(d.createdAt, {
        start: startDate || veryEarlyDate,
        end: endDate || veryFarFutureDate,
      })
  );

  return res.status(200).json({
    count: filteredData.length,
    next: null,
    previous: null,
    results: filteredData,
  });
}
