import { z } from 'zod';

import type { TransactionType } from '@/transaction/types';
import metricsDataSchema from './schemas/metricsDataSchema';

export interface DateFilter {
  type: 'TODAY' | 'WEEK' | 'MONTH';
  label: string;
  startDate: string | null;
  endDate: string | null;
}

export interface ParamsFilters {
  dateFilter: DateFilter['type'] | null;
  transactionType: TransactionType | null;
}

export type MetricsData = z.infer<typeof metricsDataSchema>;
