import { readFileSync } from 'fs';

import { z } from 'zod';
import transactionDataSchema from '../schemas/transactionDataSchema';
import type { TransactionData } from '../types';

function parseRandomData(): TransactionData[] {
  const content = readFileSync(`modules/transaction/lib/data.json`, 'utf8');

  const rawJSON = JSON.parse(content);

  const data = z.array(transactionDataSchema).parse(rawJSON);

  return data;
}

const mockedData = parseRandomData();

export default mockedData;
