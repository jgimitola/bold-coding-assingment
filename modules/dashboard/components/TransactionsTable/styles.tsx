import styled from 'styled-components';

import cl from '@/shared/lib/cl';
import rem from '@/shared/lib/rem';

const Value = styled.span`
  display: block;
  color: ${cl('blue')};
`;

const Concept = styled.span`
  display: block;
  font-size: ${rem(12)};
`;

const Comission = styled.span`
  display: block;
  color: ${cl('red')};
  font-size: ${rem(12)};
`;

const TableStyles = {
  Value,
  Concept,
  Comission,
};

export default TableStyles;
