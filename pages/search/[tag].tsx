import React, { useEffect, useState } from 'react';

import Loading from '@components/ui/Loading';
import { Photo } from '@models/photo.model';
import PhotoItem from '@components/photos/PhotoItem';
import { PhotoService } from '@services/photo.service';
import ScrollToTopBtn from '@components/ui/ScrollToTop/ScrollToTop';
import classes from '@styles/Photo.module.scss';
import { useRouter } from 'next/router';

const photoService = new PhotoService();

function FilteredPhotosPage() {
  const router = useRouter();
  const tag = router.query.tag;
  let [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    (async () => {
      if (tag && tag.length > 0) {
        const { results } = await photoService.searchAsync(tag);
        setPhotos(results);
      }
    })();
  }, [tag]);

  if (!tag || photos.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <div className={classes.grid}>
        {photos.map((photo, index) => (
          <PhotoItem key={index} photo={photo} />
        ))}
      </div>
      <ScrollToTopBtn />
    </>
  );
}

export default FilteredPhotosPage;
