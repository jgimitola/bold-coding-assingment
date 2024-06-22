import get from 'lodash/get';

import type { DefaultTheme } from 'styled-components';

import { Leaves, Palette } from '../types';

/**
 * Utility to read the color palette an returned the desire color
 *
 * @param theme The theme where the typopgraphy should be looked up
 * @param colorKey The target color styles
 *
 * @returns {string} A string like equivalent for css properties
 */
function getColor(theme: DefaultTheme, colorKey: Leaves<Palette>): string {
  const color = get(theme.palette, colorKey);

  if (!color) throw new Error('Color is not defined');

  return color;
}

export default getColor;
