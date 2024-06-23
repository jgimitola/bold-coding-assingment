import styled from 'styled-components';

import cl from '@/shared/lib/cl';

import FilterButton from '../FilterButton';

const FilterOption = styled(FilterButton)`
  width: 100%;

  justify-content: center;
  border-radius: 16px;

  text-transform: none;

  &[data-active='true'] {
    background-color: ${cl('lightGray')};
  }
`;

export default FilterOption;
