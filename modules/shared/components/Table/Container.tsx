import styled from 'styled-components';

import cl from '@/shared/lib/cl';

const Container = styled.table`
  border-collapse: collapse;

  background-color: ${cl('white')};
  border: 1px solid ${cl('lightGray')};
`;

export default Container;
