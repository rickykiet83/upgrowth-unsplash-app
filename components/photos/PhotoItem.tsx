import Image from 'next/image';
import { Photo } from '@models/photo.model';
import React from 'react';

export default function PhotoItem({ photo }: { photo: Photo }) {
  return (
    <li className='m-2'>
      <img src={photo.urls.regular} alt={photo.alt_description} />
    </li>
  );
}
