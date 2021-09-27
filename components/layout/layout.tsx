import React, { Fragment, ReactNode, memo } from 'react';

import MainNavigation from './main-navigation';
import Transition from '@components/common/Transition/Transition';
import { useRouter } from 'next/router';

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <Fragment>
      <MainNavigation />
      <Transition location={router.pathname}>
        <main className='layout'>{children}</main>
      </Transition>
    </Fragment>
  );
};

export default memo(Layout);
