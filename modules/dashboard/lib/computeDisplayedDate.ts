import capitalize from 'lodash/capitalize';

import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { isSameWeek } from 'date-fns/isSameWeek';

import { formatMonthDay, formatMonthYear } from '@/shared/lib/dateHelpers';

const computeDisplayedDate = (startDate: string, endDate: string): string => {
  const isTodayDate = isSameDay(startDate, endDate);
  const isWeekDate = isSameWeek(startDate, endDate);
  const isMonthDate = isSameMonth(startDate, endDate);

  if (isTodayDate) return capitalize(formatMonthDay(startDate));

  if (isMonthDate && !isWeekDate) return capitalize(formatMonthYear(startDate));

  return `${capitalize(formatMonthDay(startDate))} - ${capitalize(
    formatMonthDay(endDate)
  )} `;
};

export default computeDisplayedDate;
