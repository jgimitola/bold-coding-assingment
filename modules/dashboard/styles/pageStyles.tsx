import styled from 'styled-components';

import mq from '@/shared/lib/mq';

const Heading = styled.section`
  display: flex;

  @media only screen and (${mq('md')}) {
    flex-direction: column-reverse;
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding-block-start: 32px;

  @media only screen and (${mq('md')}) {
    padding-block-start: 16px;
  }
`;

const PageStyles = {
  Heading,
  Container,
};

export default PageStyles;
