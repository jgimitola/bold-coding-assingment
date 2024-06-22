import { type ReactNode } from 'react';

import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';

import BoldLogo from '@/shared/components/BoldLogo';

import LayoutStyles from './styles';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;

  return (
    <LayoutStyles.Container>
      <LayoutStyles.Navigation>
        <LayoutStyles.LogoWrapper>
          <BoldLogo />
        </LayoutStyles.LogoWrapper>

        <LayoutStyles.OptionList>
          <LayoutStyles.OptionItem>
            <LayoutStyles.Option href="#">Mi negocio</LayoutStyles.Option>
          </LayoutStyles.OptionItem>

          <LayoutStyles.OptionItem>
            <LayoutStyles.Option href="#">
              Ayuda <QuestionMarkCircledIcon />
            </LayoutStyles.Option>
          </LayoutStyles.OptionItem>
        </LayoutStyles.OptionList>
      </LayoutStyles.Navigation>

      <LayoutStyles.Content>{children}</LayoutStyles.Content>
    </LayoutStyles.Container>
  );
};

export default DefaultLayout;
