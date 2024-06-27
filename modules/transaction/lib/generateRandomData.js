const fs = require('node:fs');

const { v4: uuid } = require('uuid');
const {
  addMonths,
  compareDesc,
  endOfMonth,
  formatISO,
  startOfMonth,
} = require('date-fns');

const generateBoldId = () => uuid().substring(0, 8).toUpperCase();

function getRandomOption(options) {
  const randomIndex = Math.floor(Math.random() * 2);
  return options[randomIndex];
}

const getRandomPrice = (min = 1000, max = 1000000) =>
  Math.random() * (max - min) + min;

function getRandomFourDigitNumber() {
  const min = 1000;
  const max = 9999;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDateISO() {
  const now = new Date();
  const nextMonth = addMonths(now, 5);

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

const mockedData = Array(40)
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
  .sort((a, b) => compareDesc(a.createdAt, b.createdAt));

const fileContent = JSON.stringify(mockedData);

fs.writeFile('./modules/transaction/lib/data.json', fileContent, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Random data generated');
  }
});
