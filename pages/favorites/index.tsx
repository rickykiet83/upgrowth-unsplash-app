import React, { useContext } from 'react';

import FavoritesContext from '@store/favorites-context';
import PhotoListItem from '@components/photos/PhotoListItem';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  return <PhotoListItem photos={favoritesCtx.favorites} />;
}

export default FavoritesPage;
