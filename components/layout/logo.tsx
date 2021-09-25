import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href='/' passHref>
      <img src='/images/logo.svg' className='mx-4' />
    </Link>
  );
}

export default Logo;
