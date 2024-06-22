import { type ReactNode } from 'react';

import LayoutStyles from './styles';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;

  return <LayoutStyles.Container>{children}</LayoutStyles.Container>;
};

export default DefaultLayout;
