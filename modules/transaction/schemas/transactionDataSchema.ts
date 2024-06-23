import { z } from 'zod';

const transactionDataSchema = z.object({
  id: z.string(),
  state: z.enum(['SUCCESS', 'FAILED']),
  type: z.enum(['LINK', 'DATAPHONE']),
  boldId: z.string(),
  value: z.number(),
  commission: z.number(),
  obfuscatedCardNumber: z.number(),
  createdAt: z.string(),
});

export default transactionDataSchema;
