import { Photo, SearchedPhoto } from './../models/photo.model';

import BaseHttpService from "./base-http.service";

class UnsplashService extends BaseHttpService {
  private apiKey: string = '';
  constructor() {
    super();
    this.apiKey = this.getApiKey();
    if (!this.apiKey) {
      throw new Error('Unsplash API Key must be provided!');
    }
  }

  getApiKey(): string {
    return process.env.UNSPLASH_API_KEY || '';
  }

  get BASE_URL(): string {
    return process.env.NEXT_PUBLIC_UNSPLASH_API || `https://api.unsplash.com`;
  }

  private get clientId(): string {
    return `client_id=${this.apiKey}`;
  }

  async getRandomAsync(query: string | string[] = '', numberOfPhotos: number = 10, page: number): Promise<Photo[]> {
    const response = (await this.get<Photo[]>(`/photos/random?${this.clientId}&count=${numberOfPhotos}`)) as unknown as Photo[];
    return response;
  }

  async searchPhotosAsync(query: string, page: number = 1): Promise<SearchedPhoto> {
    const response = (await this.get<Photo>(`/search/photos/?query=${query}&page=${page}`)) as unknown as SearchedPhoto;
    return response;
  }
}

export default UnsplashService;
