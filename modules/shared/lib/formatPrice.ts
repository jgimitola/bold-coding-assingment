import { numericFormatter } from 'react-number-format';

const formatPrice = (value: number) => {
  return numericFormatter(`${value}`, {
    decimalScale: 0,
    prefix: '$',
    thousandSeparator: '.',
    decimalSeparator: ',',
  });
};

export default formatPrice;
