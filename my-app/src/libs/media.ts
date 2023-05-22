import { getStrapiURL } from './api';

export function getStrapiMedia(media: string) {
  const url = media;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}
