import React, { Fragment, ReactNode } from 'react';

import MainNavigation from './main-navigation';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className='layout'>{children}</main>
    </Fragment>
  );
};

export default Layout;
