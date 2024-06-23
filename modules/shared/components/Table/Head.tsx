import styled from 'styled-components';

import cl from '@/shared/lib/cl';

const Head = styled.thead`
  background-color: ${cl('white')};

  position: sticky;
  top: 33px;

  border-block-end: 2px solid ${cl('lightGray')};
`;

export default Head;
