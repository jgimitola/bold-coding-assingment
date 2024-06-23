import cl from '@/shared/lib/cl';
import rem from '@/shared/lib/rem';
import styled from 'styled-components';

const Caption = styled.caption`
  position: sticky;
  top: 0;
  
  text-align: left;
  font-size: ${rem(18)};
  color: ${cl('white')};
  font-weight: 500;
  line-height: 1;

  padding: 16px;
  padding-block: 8px;

  border-start-start-radius: 8px;
  border-start-end-radius: 8px;

  background: ${cl('blue')};
  background: linear-gradient(90deg, ${cl('blue')} 0%, ${cl('red')} 100%);
`;

export default Caption;
