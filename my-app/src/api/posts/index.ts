import { AxiosInstance } from 'axios';
import { BasicRest } from '../basic-rest';
import { PostList } from './types';
import { Filters, Sort } from '../types';

export class PostsRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  getPosts(params: {
    populate: string;
    'filters[type][$eq]'?: Filters['type'];
    sort?: Sort['sortByCreate'];
  }) {
    return this.getRequest<PostList>(`/posts`, params);
  }
}
