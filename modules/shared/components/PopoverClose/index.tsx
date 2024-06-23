import styled from 'styled-components';

import * as Popover from '@radix-ui/react-popover';

const PopoverClose = styled(Popover.Close)`
  position: absolute;
  top: 4px;
  right: 8px;

  border: none;
  background: none;

  aspect-ratio: 1;
  padding: 4px;

  border-radius: 50%;

  cursor: pointer;
`;

export default PopoverClose;
