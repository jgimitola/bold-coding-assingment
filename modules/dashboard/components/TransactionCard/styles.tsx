import styled from 'styled-components';

import cl from '@/shared/lib/cl';
import rem from '@/shared/lib/rem';

export const Label = styled.span`
  display: block;

  font-size: ${rem(12)};
  line-height: 1;
  font-weight: 500;
  color: ${cl('blue')};
`;

export const Value = styled.span`
  font-size: ${rem(14)};
  line-height: 1;
  font-weight: 700;
  color: ${cl('blue')};

  &[data-comission] {
    color: ${cl('red')};
  }
`;

export const InfoItem = styled.div`
  flex-basis: calc(50% - 24px);
`;

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: safe;
  gap: 24px;

  padding: 16px;

  border: 1px solid ${cl('lightGray')};
  border-radius: 8px;

  background-color: ${cl('white')};
`;

const CardStyles = {
  Label,
  Value,
  InfoItem,
  Container,
};

export default CardStyles;
