import { Photo, SearchedPhoto } from "@models/photo.model";

import UnsplashService from "./unsplash.service";

export class PhotoService extends UnsplashService {
  async getRandomAsync(numberOfPhotos: number = 10, page: number, query: string | string[] = ''): Promise<Photo[]> {
    const response = super.getRandomPhotoAsync(numberOfPhotos, page, query);
    return response;
  }

  async searchAsync(query: string | any, page: number = 1): Promise<SearchedPhoto> {
    const response = await super.searchPhotosAsync(query, page);
    return response;
  }
}