import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Photo } from '../models/photo.model';
import PhotoListItem from '../components/photos/PhotoListItem';
import UnsplashService from '../services/unsplash.service';

const Home: NextPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    (async () => {
      const data = await new UnsplashService().getRandom(20);
      if (data) setPhotos(data);
    })();
  }, []);

  return (
    <div className='container'>
      <PhotoListItem photos={photos} />
    </div>
  );
};

export default Home;
