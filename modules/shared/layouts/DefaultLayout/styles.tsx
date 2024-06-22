import styled from 'styled-components';

import cl from '@/shared/lib/cl';
import mq from '@/shared/lib/mq';
import rem from '@/shared/lib/rem';

const Option = styled.a`
  color: inherit;
  text-decoration: none;

  &:has(svg) {
    display: inline-flex;
    gap: 8px;

    align-items: center;
  }
`;

const OptionItem = styled.li`
  font-size: ${rem(14)};
  color: ${cl('white')};

  @media only screen and (${mq('md')}) {
    font-size: ${rem(12)};
  }
`;

const OptionList = styled.ul`
  padding: 0;

  display: flex;
  gap: 32px;

  list-style-type: none;

  margin-inline-start: auto;
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;

  aspect-ratio: 2.79166666667;
  height: var(--logoHeight);

  color: ${cl('white')};
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  height: var(--navigationHeight);

  padding-block: var(--navigationBlockPadding);
  padding-inline: var(--pageInlinePadding);

  background: ${cl('blue')};
  background: linear-gradient(90deg, ${cl('blue')} 0%, ${cl('red')} 100%);
`;

const Content = styled.div`
  height: calc(100% - var(--navigationHeight));

  padding-inline: var(--pageInlinePadding);

  overflow-y: auto;
`;

const Container = styled.div`
  --navigationBlockPadding: 24px;
  --logoHeight: ${rem(24)};

  --navigationHeight: calc(
    var(--logoHeight) + 2 * var(--navigationBlockPadding)
  );

  --pageInlinePadding: 32px;

  height: 100%;

  @media only screen and (${mq('md')}) {
    --pageInlinePadding: 16px;
    --navigationBlockPadding: 12px;
  }
`;

const LayoutStyles = {
  Option,
  OptionItem,
  OptionList,
  LogoWrapper,
  Navigation,
  Content,
  Container,
};

export default LayoutStyles;
