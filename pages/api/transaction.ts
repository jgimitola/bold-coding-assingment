import type { NextApiRequest, NextApiResponse } from 'next';

import applyLimitAndOffset from '@/shared/lib/applyLimitAndOffset';

import mockedData from '@/transaction/lib/mockedData';

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

  const filteredData = applyLimitAndOffset(mockedData, limit, offset);

  return res.status(200).json({
    count: filteredData.length,
    next: null,
    previous: null,
    results: filteredData,
  });
}
