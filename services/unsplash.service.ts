import { APIResponse } from './../models/api-response.model';
import BaseHttpService from "./base-http.service";
import { Photo } from './../models/photo.model';

class UnsplashService extends BaseHttpService {
  async getRandom(numberOfPhotos: number = 10): Promise<Photo[]> {
    const response = (await this.get<Photo[]>(`/photos/random?count=${numberOfPhotos}`)) as unknown as Photo[];
    return response;
  }

  async searchPhotos(query: string, page: number = 1): Promise<APIResponse<Photo>> {
    const response = (await this.get<Photo>(`/search/photos/?query=${query}`)) as APIResponse<Photo>;
    return response;
  }
}

export default UnsplashService;
