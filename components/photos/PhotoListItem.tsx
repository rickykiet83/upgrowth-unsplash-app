import { Photo } from '../../models/photo.model';
import PhotoItem from './PhotoItem';
import React from 'react';
import classes from './PhotoList.module.scss';

function PhotoListItem({ photos }: { photos: Photo[] }) {
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
