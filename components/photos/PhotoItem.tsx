import React, { useContext } from 'react';

import FavoritesContext from '@store/favorites-context';
import { Photo } from '@models/photo.model';
import classes from './Photo.module.scss';

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
    <figure className={classes.effect_zoe}>
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <figcaption>
        <h2>
          Creative <span>Zoe</span>
        </h2>
        <p className={classes.icon_links}>
          <a onClick={toggleFavoritesStatusHandler} href='#'>
            <span
              className={
                itemIsFavorite ? classes.icon_heart_active : classes.icon_heart
              }
            />
          </a>
          <a href='#'>
            <span className={classes.icon_eye} />
          </a>
        </p>
        <p className={classes.description}>
          Zoe never had the patience of her sisters. She deliberately punched
          the bear in his face.
        </p>
      </figcaption>
    </figure>
  );
}
