import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import PhotoListItem from '@components/photos/PhotoListItem';
import { PhotoService } from '@services/photo.service';
import React from 'react';
import ScrollToTopBtn from '@components/ui/ScrollToTop/ScrollToTop';

export const getStaticProps: GetStaticProps = async () => {
  const photoService = new PhotoService();

  let response = await photoService.getRandomAsync(50, 1);
  const photos = await response;
  if (!photos) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      photos,
    },
  };
};

export default function Home({
  photos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <PhotoListItem photos={photos} />
      <ScrollToTopBtn />
    </div>
  );
}
