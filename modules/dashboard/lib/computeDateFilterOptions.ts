import { endOfMonth } from 'date-fns/endOfMonth';
import { endOfWeek } from 'date-fns/endOfWeek';
import { formatISO } from 'date-fns/formatISO';
import { startOfMonth } from 'date-fns/startOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';

import capitalize from 'lodash/capitalize';

import { formatMonth } from '@/shared/lib/dateHelpers';

import { endOfDay } from 'date-fns';
import { startOfDay } from 'date-fns/startOfDay';
import type { DateFilter } from '../types';

export type DateOptions = [DateFilter, DateFilter, DateFilter];

const computeDateFilterOptions = (): DateOptions => {
  const todayObject = new Date();
  const todayISODate = formatISO(todayObject);

  const dateFilters: DateOptions = [
    {
      label: 'Hoy',
      startDate: formatISO(startOfDay(todayObject)),
      endDate: formatISO(endOfDay(todayObject)),
    },
    {
      label: 'Esta semana',
      startDate: formatISO(startOfWeek(todayObject)),
      endDate: formatISO(endOfWeek(todayObject)),
    },
    {
      label: capitalize(formatMonth(todayISODate)),
      startDate: formatISO(startOfMonth(todayObject)),
      endDate: formatISO(endOfMonth(todayObject)),
    },
  ];

  return dateFilters;
};

export default computeDateFilterOptions;
