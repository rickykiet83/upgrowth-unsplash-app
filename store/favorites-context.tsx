import { createContext, useState } from 'react';

import { Photo } from 'models/photo.model';

type FavoriteContext = {
  favorites: Photo[];
  totalFavorites: number;
  addFavorite: (favoritePhoto: Photo) => void;
  removeFavorite: (photoId: string) => void;
  itemIsFavorite: (photoId: string) => {};
};

const FavoritesContext = createContext<FavoriteContext>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritePhoto: Photo) => {},
  removeFavorite: (photoId: string) => {},
  itemIsFavorite: (photoId: string) => {
    return Boolean;
  },
});

export function FavoritesContextProvider(props: any) {
  const [photoFavorites, setPhotoFavorites] = useState<Photo[]>([]);

  function addFavoriteHandler(favoritePhoto: Photo) {
    setPhotoFavorites((prePhotoFavorites) =>
      prePhotoFavorites.concat(favoritePhoto)
    );
  }

  function removeFavoriteHandler(photoId: string) {
    setPhotoFavorites((prevPhotoFavorites) =>
      prevPhotoFavorites.filter((photo) => photo.id !== photoId)
    );
  }

  function itemIsFavoriteHandler(photoId: string) {
    return photoFavorites.some((photo) => photo.id === photoId);
  }

  const context: FavoriteContext = {
    favorites: photoFavorites,
    totalFavorites: photoFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
