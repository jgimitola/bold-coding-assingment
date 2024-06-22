import styled from 'styled-components';

import cl from '@/shared/lib/cl';

const FilterList = styled.ol`
  padding: 0;
  list-style-type: none;

  display: flex;
  align-items: center;

  gap: 4px;

  width: 100%;

  padding: 2px 4px;

  background-color: ${cl('white')};
`;

export default FilterList;
