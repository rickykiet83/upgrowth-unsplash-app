import React, { useContext } from 'react';

import FavoritesContext from '@store/favorites-context';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import PhotoListItem from '@components/photos/PhotoListItem';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <PhotoListItem photos={favoritesCtx.favorites} />;
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
        <div className='py-1'>{content}</div>
      </section>
    </>
  );
}

export default FavoritesPage;
