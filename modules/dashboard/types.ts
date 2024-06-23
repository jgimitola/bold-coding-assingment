import { z } from 'zod';

import metricsDataSchema from './schemas/metricsDataSchema';

export interface DateFilter {
  label: string;
  startDate: string | null;
  endDate: string | null;
}

export type MetricsData = z.infer<typeof metricsDataSchema>;
