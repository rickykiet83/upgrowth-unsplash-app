import { Photo, SearchedPhoto } from '@models/photo.model';

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

  protected getApiKey(): string {
    return process.env.NEXT_PUBLIC_UNSPLASH_API_KEY || '';
  }

  protected get BASE_URL(): string {
    return process.env.NEXT_PUBLIC_UNSPLASH_API || `https://api.unsplash.com`;
  }

  private get clientId(): string {
    return `client_id=${this.apiKey}`;
  }

  protected async getRandomPhotoAsync(numberOfPhotos: number = 30, query: string | string[] = ''): Promise<Photo[]> {
    const endpoint = `/photos/random?${this.clientId}&query=${query}&count=${numberOfPhotos}`;
    const response = (await this.get<Photo[]>(endpoint)) as unknown as Photo[];
    return response;
  }

  protected async searchPhotosAsync(query: string): Promise<SearchedPhoto> {
    const endpoint = `/search/photos/?${this.clientId}&query=${query}`;
    const response = (await this.get<Photo>(endpoint)) as unknown as SearchedPhoto;
    return response;
  }
}

export default UnsplashService;
