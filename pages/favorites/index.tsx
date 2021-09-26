import React, { useContext } from 'react';

import FavoritesContext from '@store/favorites-context';
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
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
