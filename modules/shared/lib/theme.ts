import type { DefaultTheme } from 'styled-components';

import rem from './rem';

const theme: DefaultTheme = {
  palette: {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)',

    blue: 'hsla(232, 71%, 25%, 1)',
    darkRed: 'hsla(356, 83%, 56%, 1)',
    red: 'hsla(356, 83%, 60%, 1)',
    lightRed: 'hsla(356, 83%, 75%, 1)',
    darkGray: 'hsla(0, 0%, 38%, 1)',
    lightGray: 'hsla(0, 0%, 95%, 1)',
    background: 'hsla(264, 29%, 97%, 1)',
  },

  mediaQueries: {
    md: `max-width: ${rem(768)}`,
  },
};

export default theme;
