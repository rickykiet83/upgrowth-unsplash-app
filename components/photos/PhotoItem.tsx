import React, { useContext } from 'react';

import FavoritesContext from '@store/favorites-context';
import Image from 'next/image';
import { Photo } from '@models/photo.model';

export default function PhotoItem({ photo }: { photo: Photo }) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(photo.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(photo.id);
    } else {
      favoritesCtx.addFavorite(photo);
    }
  }

  return (
    <li className='m-2'>
      <img
        onClick={toggleFavoritesStatusHandler}
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
    </li>
  );
}
