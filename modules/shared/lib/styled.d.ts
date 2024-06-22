import 'styled-components';

import type { Palette } from '../types';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
  }
}
