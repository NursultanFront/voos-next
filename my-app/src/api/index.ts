import axios from 'axios';
import { PostsRest } from './posts';
import qs from 'qs';

class Api {
  public constructor() {
    this.endpoint = Api.createEndpoint();
    this.posts = new PostsRest(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: 'http://127.0.0.1:1337/api',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'bearer 9d698fb1c86c26fe72a0c2f29ad1c4a4ac3cd312d87ad83fa7a371b88dfcf5ed71229ad6611034be217bee9587d78caf120985eba2d2354368cf2ff5fcd2c456bb4c6f343709cbf6f2b4ce375393ce217ca3f9ae5f6e7f888b42829bbf8c885592798ab3c065ffb3df4ca60051cd02aecdcc8c2cd74c041f8a4f1a067c8ca6ef',
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { encode: false });
      },
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : '{}')],
    });
  }

  private readonly endpoint;
  public posts;
}

export const api = new Api();
