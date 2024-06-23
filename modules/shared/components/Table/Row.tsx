import styled from 'styled-components';

import cl from '@/shared/lib/cl';

import rem from '@/shared/lib/rem';
import BodyCell from './BodyCell';
import HeadCell from './HeadlCell';

const Row = styled.tr`
  vertical-align: top;

  ${HeadCell}, ${BodyCell} {
    padding: 14px;
    border-block-end: 1px solid ${cl('lightGray')};

    font-weight: 500;
  }

  ${HeadCell} {
    font-size: ${rem(12)};
    color: ${cl('blue')};
  }

  ${BodyCell} {
    font-size: ${rem(14)};
    color: ${cl('darkGray')};
  }
`;

export default Row;
