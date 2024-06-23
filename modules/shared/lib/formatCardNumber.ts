import { patternFormatter } from 'react-number-format';

const formatCardNumber = (value: string) =>
  patternFormatter(`${value}`, {
    format: '**** **** **** XXXX',
    patternChar: 'X',
  });

export default formatCardNumber;
