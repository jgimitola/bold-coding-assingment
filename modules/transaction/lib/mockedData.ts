import { v4 as uuid } from 'uuid';

import { addMonths } from 'date-fns/addMonths';
import { compareDesc } from 'date-fns/compareDesc';
import { endOfMonth } from 'date-fns/endOfMonth';
import { formatISO } from 'date-fns/formatISO';
import { startOfMonth } from 'date-fns/startOfMonth';

import type { TransactionData } from '../types';

const generateBoldId = () => uuid().substring(0, 8).toUpperCase();

function getRandomOption<T>(options: [T, T]): T {
  const randomIndex = Math.floor(Math.random() * 2);
  return options[randomIndex];
}

const getRandomPrice = (min: number = 1000, max: number = 1000000) =>
  Math.random() * (max - min) + min;

function getRandomFourDigitNumber(): number {
  const min = 1000;
  const max = 9999;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDateISO(): string {
  const now = new Date();
  const nextMonth = addMonths(now, 1);

  const currentMonthStart = startOfMonth(now);
  const currentMonthEnd = endOfMonth(now);
  const nextMonthStart = startOfMonth(nextMonth);
  const nextMonthEnd = endOfMonth(nextMonth);

  const startDate = Math.random() < 0.85 ? currentMonthStart : nextMonthStart;
  const endDate =
    startDate === currentMonthStart ? currentMonthEnd : nextMonthEnd;

  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );

  return formatISO(randomDate);
}

// Wrap inside IIFE to prevent regenerating data on each api route import
const mockedData: TransactionData[] = (() =>
  Array(40)
    .fill(1)
    .map(() => ({
      id: uuid(),
      state: getRandomOption(['SUCCESS', 'FAILED']),
      type: getRandomOption(['LINK', 'DATAPHONE']),
      boldId: generateBoldId(),
      value: getRandomPrice(),
      commission: getRandomOption([0, getRandomPrice(1000, 10000)]),
      obfuscatedCardNumber: getRandomFourDigitNumber(),
      createdAt: getRandomDateISO(),
    }))
    .sort((a, b) =>
      compareDesc(a.createdAt, b.createdAt)
    ) as TransactionData[])();

export default mockedData;
