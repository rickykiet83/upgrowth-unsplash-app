import { Photo, SearchedPhoto } from '../models/photo.model';
import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import type { NextPage } from 'next';
import PhotoListItem from '../components/photos/PhotoListItem';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';

const Home: NextPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${baseUrl}/api/photos/random?count=50&page=1`
      );

      if (response) setPhotos(response.data);
    })();
  }, []);

  return (
    <div className='container'>
      <PhotoListItem photos={photos} />
    </div>
  );
};

export default Home;
