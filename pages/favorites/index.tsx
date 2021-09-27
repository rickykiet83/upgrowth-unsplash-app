import React, { useContext } from 'react';

import FavoritesContext from '@store/favorites-context';
import PhotoItem from '@components/photos/PhotoItem';
import classes from '@styles/Photo.module.scss';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <h3>You got no favorites yet. Start adding some?</h3>;
  }

  return (
    <>
      <section className='py-1 text-center bg-light'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='fw-light'>My Favorites</h1>
            <div className='lead text-muted'>
              <p>{`Tap a heart icon at the bottom right of any photo, and it'll automatically show up in Favorites`}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='py-lg-5 container'>
          <div className={classes.grid}>
            {favoritesCtx.totalFavorites === 0
              ? content
              : favoritesCtx.favorites.map((photo, index) => {
                  return <PhotoItem key={index} photo={photo} />;
                })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FavoritesPage;
