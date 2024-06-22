import { DEFAULT_BROWSER_FONT_SIZE } from '@/shared/lib/constants';

const rem = (px: number, browserFontSize = DEFAULT_BROWSER_FONT_SIZE) => {
  if (browserFontSize <= 0) throw new Error('Invalid font-size');

  return `${px / browserFontSize}rem`;
};

export default rem;
