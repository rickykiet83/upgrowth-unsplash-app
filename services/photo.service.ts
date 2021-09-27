import { Photo, SearchedPhoto } from "@models/photo.model";

import UnsplashService from "./unsplash.service";

export class PhotoService extends UnsplashService {
  async getRandomAsync(numberOfPhotos: number = 10, query: string | string[] = ''): Promise<Photo[]> {
    const response = super.getRandomPhotoAsync(numberOfPhotos, query);
    return response;
  }

  async searchAsync(query: string | any): Promise<SearchedPhoto> {
    const response = await super.searchPhotosAsync(query);
    return response;
  }
}