import { z } from 'zod';

import transactionDataSchema from './schemas/transactionDataSchema';

export type TransactionData = z.infer<typeof transactionDataSchema>;
