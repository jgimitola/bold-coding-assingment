import styled from 'styled-components';

import cl from '@/shared/lib/cl';
import mq from '@/shared/lib/mq';
import rem from '@/shared/lib/rem';

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 4px 16px;

  border: 1px solid transparent;
  border-radius: 8px;

  background-color: ${cl('white')};

  text-transform: uppercase;
  color: ${cl('blue')};
  font-size: ${rem(14)};
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: ${cl('lightGray')};
  }

  @media only screen and (${mq('md')}) {
    font-size: ${rem(12)};
  }
`;

export default FilterButton;
