import { z } from 'zod';

const metricsDataSchema = z.object({
  totalSales: z.number(),
});

export default metricsDataSchema;
