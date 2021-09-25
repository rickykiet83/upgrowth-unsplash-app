import { Photo, SearchedPhoto } from "../models/photo.model";

import UnsplashService from "./unsplash.service";

export class PhotoService extends UnsplashService {
  async getRandomAsync(numberOfPhotos: number = 10, page: number, query: string | string[] = ''): Promise<Photo[]> {
    const response = super.getRandomAsync(numberOfPhotos, page, query);
    return response;
  }

  async searchPhotosAsync(query: string, page: number = 1): Promise<SearchedPhoto> {
    const response = super.searchPhotosAsync(query, page);
    return response;
  }
}