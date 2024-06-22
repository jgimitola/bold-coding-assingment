import 'styled-components';

import type { MediaQuery, Palette } from '../types';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    mediaQueries: MediaQuery;
  }
}
