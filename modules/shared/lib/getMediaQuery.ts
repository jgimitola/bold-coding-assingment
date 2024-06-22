import get from 'lodash/get';

import type { DefaultTheme } from 'styled-components';

import { Leaves, MediaQuery } from '../types';

/**
 * Utility to read the media query options an returned the desired value
 *
 * @param theme The theme where the typopgraphy should be looked up
 * @param mqKey The target media styles
 *
 * @returns {string} A string like equivalent for css media feature
 */
function getMediaQuery(theme: DefaultTheme, mqKey: Leaves<MediaQuery>): string {
  const mediaQuery = get(theme.mediaQueries, mqKey);

  if (!mediaQuery) throw new Error('Media query is not defined');

  return mediaQuery;
}

export default getMediaQuery;
