import Loading from '@components/ui/Loading';
import { Photo } from '@models/photo.model';
import PhotoItem from './PhotoItem';
import React from 'react';
import classes from './Photo.module.scss';

function PhotoListItem({ photos }: { photos: Photo[] }) {
  if (!photos) {
    return <Loading />;
  }
  return (
    <div className={classes.grid}>
      {photos.map((photo) => {
        return <PhotoItem key={photo.id} photo={photo} />;
      })}
    </div>
  );
}

export default PhotoListItem;
