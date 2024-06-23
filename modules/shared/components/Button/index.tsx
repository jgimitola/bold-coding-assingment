import styled from 'styled-components';

import cl from '@/shared/lib/cl';
import rem from '@/shared/lib/rem';

const Button = styled.button`
  color: ${cl('white')};
  font-size: ${rem(16)};
  font-weight: 700;

  padding: 6px 32px;

  background-color: ${cl('red')};

  border: 1px solid transparent;
  border-radius: 24px;

  &:hover {
    cursor: pointer;

    background-color: ${cl('darkRed')};
  }

  &[disabled] {
    background-color: ${cl('lightRed')};
  }
`;

export default Button;
