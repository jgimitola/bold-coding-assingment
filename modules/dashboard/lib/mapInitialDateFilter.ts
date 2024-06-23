import type { DateFilter, ParamsFilters } from '../types';
import { type DateOptions } from './computeDateFilterOptions';

const mapInitialDateFilter = (
  dateFilter: ParamsFilters['dateFilter'],
  dateFilterOptions: DateOptions
): DateFilter => {
  if (!dateFilter) return dateFilterOptions[0];

  const map: Record<Exclude<ParamsFilters['dateFilter'], null>, DateFilter> = {
    TODAY: dateFilterOptions[0],
    WEEK: dateFilterOptions[1],
    MONTH: dateFilterOptions[2],
  };

  return map[dateFilter];
};

export default mapInitialDateFilter;
