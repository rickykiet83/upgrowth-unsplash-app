import React, { Component, useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '@components/ui/Loading';
import { Photo } from '@models/photo.model';
import PhotoItem from './PhotoItem';
import { PhotoService } from '@services/photo.service';
import classes from '@styles/Photo.module.scss';

const photoService = new PhotoService();

function PhotoListItem({ photos }: { photos: Photo[] }) {
  const [morePhotos, setMorePhotos] = useState<Photo[]>([]);

  useEffect(() => {
    setMorePhotos(photos);
  }, [photos]);

  if (!photos) {
    return <Loading />;
  }

  const fetchMoreData = async () => {
    const response = await photoService.getRandomAsync(10);
    const _morePhotos = morePhotos.concat(response);
    setMorePhotos(_morePhotos);
  };

  return (
    <div className={classes.grid}>
      <InfiniteScroll
        dataLength={morePhotos.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {morePhotos.map((photo, index) => (
          <PhotoItem key={index} photo={photo} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default PhotoListItem;
