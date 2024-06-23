import { type Params } from '../controllers/listTransactions';

const transactionKeys = {
  key: ['transactions'] as const,
  keyList: () => [...transactionKeys.key, 'list'] as const,
  list: (params: Params) =>
    [...transactionKeys.keyList(), { ...params }] as const,
};

export default transactionKeys;
