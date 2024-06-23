import { format } from 'date-fns/format';
import { es } from 'date-fns/locale';
import { parseISO } from 'date-fns/parseISO';
import { setDefaultOptions } from 'date-fns/setDefaultOptions';

setDefaultOptions({ locale: es });

export const formatDateHour = (date: string) =>
  format(parseISO(date), 'dd/MM/yyyy - hh:mm:ss');

export const formatMonth = (date: string) => format(parseISO(date), 'MMMM');

export const formatMonthDay = (date: string) =>
  format(parseISO(date), 'MMMM dd');

export const formatMonthYear = (date: string) =>
  format(parseISO(date), 'MMMM, yyyy');
