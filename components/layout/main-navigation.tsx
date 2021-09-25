import React, { useState } from 'react';

import Link from 'next/link';
import Logo from './logo';
import { Nav } from 'react-bootstrap';
import { Searchbar } from '@components/common';

function MainNavigation() {
  return (
    <div className='container'>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <Logo />
        <div className='col-12 col-lg-8 mb-3 mb-lg-0 me-lg-3'>
          <Searchbar />
        </div>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link href='/' passHref>
              <Nav.Link className='active'>Home</Nav.Link>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/favorites' passHref>
              <Nav.Link>Favorites</Nav.Link>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default MainNavigation;
