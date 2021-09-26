import Loading from '@components/ui/Loading';
import { Photo } from '@models/photo.model';
import PhotoItem from './PhotoItem';
import React from 'react';
import classes from './PhotoList.module.scss';

function PhotoListItem({ photos }: { photos: Photo[] }) {
  if (!photos) {
    return <Loading />;
  }
  return (
    <>
      <div className='row'>
        <ul className={classes.photo_grid_display}>
          {photos.map((photo) => (
            <PhotoItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default PhotoListItem;
