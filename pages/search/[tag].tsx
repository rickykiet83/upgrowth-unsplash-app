import React, { useEffect, useState } from 'react';

import Loading from '@components/ui/Loading';
import { Photo } from '@models/photo.model';
import PhotoListItem from '@components/photos/PhotoListItem';
import { PhotoService } from '@services/photo.service';
import { useRouter } from 'next/router';

function FilteredPhotosPage() {
  const router = useRouter();
  const tag = router.query.tag;
  const photoService = new PhotoService();
  const [photos, setPhotos] = useState<Photo[]>([]);

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
      <PhotoListItem photos={photos} />
    </>
  );
}

export default FilteredPhotosPage;
