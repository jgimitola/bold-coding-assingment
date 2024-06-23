import type { NextApiRequest, NextApiResponse } from 'next';

import mockedData from '@/transaction/lib/mockedData';

import filterMockedData from '@/shared/lib/filterMockedData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(200).json({
      error: true,
      message: 'Method not supported yet',
      data: null,
    });
  }

  const startDate = req.query.startDate as string | undefined;
  const endDate = req.query.endDate as string | undefined;

  const totalSales = filterMockedData(
    mockedData.length,
    0,
    startDate,
    endDate,
    undefined
  )
    .map((d) => (d.state === 'SUCCESS' ? d.value : 0))
    .reduce((a, b) => a + b, 0);

  return res.status(200).json({
    error: false,
    message: 'Total Exitoso!',
    data: { totalSales },
  });
}
