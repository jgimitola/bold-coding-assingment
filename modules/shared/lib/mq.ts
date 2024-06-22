import type { Leaves, MediaQuery } from '../types';

import getMediaQuery from './getMediaQuery';
import theme from './theme';

/**
 * Utility to read the color palette from the `default` theme and returned the
 * media query
 *
 * @param mqKey The target media query feature
 *
 * @returns {string} A string like equivalent for css properties
 */
function mq(mqKey: Leaves<MediaQuery>): string {
  return getMediaQuery(theme, mqKey);
}

export default mq;
