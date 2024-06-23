import { type Params } from '../controllers/getMetrics';

const dashboardKeys = {
  key: ['dashboard'] as const,
  metricsKey: () => [...dashboardKeys.key, 'metric'] as const,
  metrics: (params: Params) =>
    [...dashboardKeys.metricsKey(), { ...params }] as const,
};

export default dashboardKeys;
