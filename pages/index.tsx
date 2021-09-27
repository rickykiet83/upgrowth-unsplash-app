import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import PhotoListItem from '@components/photos/PhotoListItem';
import { PhotoService } from '@services/photo.service';
import React from 'react';
import ScrollToTopBtn from '@components/ui/ScrollToTop/ScrollToTop';

const photoService = new PhotoService();

export const getStaticProps: GetStaticProps = async () => {
  const photos = await photoService.getRandomAsync(30);
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
    <>
      <section className='py-1 text-center bg-light'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='fw-light'>UPGROWTH</h1>
            <div className='lead text-muted'>
              <p>{`A digital product studio`}</p>
              <p>
                We partner with ambitious companies to design and build customer
                centric digital products.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PhotoListItem photos={photos} />
      <ScrollToTopBtn />
    </>
  );
}
