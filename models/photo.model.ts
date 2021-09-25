import { ITag } from './tag.model';
export interface Photo {
  id: string,
  width: number,
  height: number,
  color: string,
  description: string;
  alt_description: string;
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string
  };
  links: {};
  categories: string[];
  likes: number;
  tags: ITag[];
}

export interface SearchedPhoto {
  total: number,
  total_pages: number;
  results: Photo[];
}