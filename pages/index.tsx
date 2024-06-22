import Head from 'next/head';

import BoldLogo from '@/shared/components/BoldLogo';
import TestStyled from '@/shared/components/TestStyled';
import WrapperTest from '@/shared/components/WrapperTest';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bold Dashboard</title>
      </Head>

      <WrapperTest>
        <BoldLogo />
        <TestStyled>hola</TestStyled>
      </WrapperTest>
    </>
  );
}
