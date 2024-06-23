import styled from 'styled-components';

import CardStyles from '@/dashboard/components/TotalCard/styles';

import FilterButton from '@/shared/components/FilterButton';
import FilterOption from '@/shared/components/FilterOption';
import mq from '@/shared/lib/mq';
import rem from '@/shared/lib/rem';

const Filters = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  ${FilterButton}:not(${FilterOption}) {
    align-self: end;
    margin-block-start: 8px;
  }
`;

const Heading = styled.section`
  display: flex;
  gap: 16px;

  margin-block-end: 16px;

  ${CardStyles.Container} {
    min-width: ${rem(400)};
  }

  @media only screen and (${mq('md')}) {
    flex-direction: column-reverse;

    ${CardStyles.Container} {
      min-width: 0;
    }
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;

  height: 100%;

  padding-block-start: 32px;

  @media only screen and (${mq('md')}) {
    padding-block-start: 16px;
  }
`;

const PageStyles = {
  Filters,
  Heading,
  Container,
};

export default PageStyles;
