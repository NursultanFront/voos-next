import { ListOf } from '@/api/types';

export interface Posts {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  title: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  images: Images;
  localizations: Localizations;
}

interface Images {
  data: Data;
}

interface Data {
  id: number;
  attributes: ImageAttributes;
}

interface ImageAttributes {
  name: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  thumbnail: Thumbnail;
}

interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

interface Localizations {
  data: unknown[];
}

export type PostList = ListOf<Posts>;
