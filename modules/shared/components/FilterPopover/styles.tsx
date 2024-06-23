import styled from 'styled-components';

import cl from '@/shared/lib/cl';
import rem from '@/shared/lib/rem';

import Button from '../Button';
import Label from '../Label';

const Title = styled.h4`
  user-select: none;

  color: ${cl('blue')};
  text-align: center;
  font-size: ${rem(14)};
  font-weight: 500;

  margin-block-end: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${Label} {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  ${Button} {
    margin-block-start: 16px;

    margin-inline: auto;
  }
`;

const PopoverStyles = { Title, Container };

export default PopoverStyles;
