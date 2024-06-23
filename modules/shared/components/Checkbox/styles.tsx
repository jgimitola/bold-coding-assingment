import styled from 'styled-components';

import * as Checkbox from '@radix-ui/react-checkbox';

import cl from '@/shared/lib/cl';
import rem from '@/shared/lib/rem';

const Fill = styled.div`
  flex: 1;

  width: 100%;
  height: 100%;

  background-color: ${cl('red')};

  border-radius: ${rem(2)};
`;

const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${cl('red')};

  width: 100%;
  height: 100%;
`;

const CheckboxRoot = styled(Checkbox.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: ${rem(20)};

  height: 1em;
  width: 1em;

  padding: 2px;

  background-color: ${cl('white')};

  border: 2px solid ${cl('darkGray')};
  border-radius: ${rem(4)};
`;

const CheckboxStyles = {
  Fill,
  CheckboxRoot,
  CheckboxIndicator,
};

export default CheckboxStyles;
