import styled from 'styled-components';

import cl from '@/shared/lib/cl';
import mq from '@/shared/lib/mq';
import rem from '@/shared/lib/rem';

const Title = styled.h3`
  font-weight: 500;
`;

const Date = styled.div`
  color: ${cl('black')};
  font-size: ${rem(14)};
`;

const Price = styled.div`
  background: -webkit-linear-gradient(
    90deg,
    ${cl('blue')} -50%,
    ${cl('red')} 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: ${rem(24)};
  font-weight: 700;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-block: 16px;

  ${Date}, ${Price} {
    text-align: center;
  }

  @media only screen and (${mq('md')}) {
    padding-block: 8px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-block-start: -16px;
  margin-inline: -16px;

  padding: 16px;

  border-start-start-radius: 8px;
  border-start-end-radius: 8px;

  background: linear-gradient(90deg, ${cl('blue')} -50%, ${cl('red')} 100%);

  font-size: ${rem(16)};
  color: ${cl('white')};

  & > svg {
    margin-inline-start: auto;
  }

  @media only screen and (${mq('md')}) {
    padding-block: 8px;
    font-size: ${rem(14)};
  }
`;

const Container = styled.article`
  padding: 16px;

  border: 1px solid ${cl('lightGray')};
  border-radius: 8px;

  background-color: ${cl('white')};
`;

const CardStyles = {
  Date,
  Price,
  Content,
  Title,
  Header,
  Container,
};

export default CardStyles;
