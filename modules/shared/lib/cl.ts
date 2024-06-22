import type { Leaves, Palette } from '../types';

import getColor from './getColor';
import theme from './theme';

/**
 * Utility to read the color palette from the `default` theme and returned the
 * desired color
 *
 * @param colorKey The target color styles
 *
 * @returns {string} A string like equivalent for css properties
 */
function cl(colorKey: Leaves<Palette>): string {
  return getColor(theme, colorKey);
}

export default cl;
