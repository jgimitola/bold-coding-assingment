import type { NextApiRequest, NextApiResponse } from 'next';

import type { TransactionType } from '@/transaction/types';

import filterMockedData from '@/shared/lib/filterMockedData';

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
  const type = req.query.type as TransactionType | undefined;

  const filteredData = filterMockedData(
    limit,
    offset,
    startDate,
    endDate,
    type
  );

  return res.status(200).json({
    count: filteredData.length,
    next: null,
    previous: null,
    results: filteredData,
  });
}
