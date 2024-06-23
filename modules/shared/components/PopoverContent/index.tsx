import styled from 'styled-components';

import * as Popover from '@radix-ui/react-popover';

import cl from '@/shared/lib/cl';
import rem from '@/shared/lib/rem';

const PopoverContent = styled(Popover.Content)`
  position: relative;

  min-width: ${rem(250)};
  min-height: ${rem(120)};

  padding: 16px;
  padding-block: 8px 24px;

  border-radius: 16px;

  background: ${cl('white')};
`;

export default PopoverContent;
