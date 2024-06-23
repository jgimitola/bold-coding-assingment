import styled from 'styled-components';

import * as RLabel from '@radix-ui/react-label';

import cl from '@/shared/lib/cl';

const Label = styled(RLabel.Root)`
  color: ${cl('blue')};
  font-weight: 500;
`;

export default Label;
