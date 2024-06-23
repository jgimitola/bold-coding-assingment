import styled from 'styled-components';

import cl from '@/shared/lib/cl';

import BodyCell from './BodyCell';

const Body = styled.tbody`
  ${BodyCell}:first-of-type {
    color: ${cl('blue')};
  }

  ${BodyCell}:first-of-type[data-success="true"] {
    border-inline-start: 4px solid ${cl('blue')};
  }

  ${BodyCell}:first-of-type[data-success="false"] {
    border-inline-start: 4px solid ${cl('darkGray')};
  }
`;

export default Body;
