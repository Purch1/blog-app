import { Injectable } from '@nestjs/common';
import { GetPostsParamsDto } from '../dtos/get-posts-params.dto';

@Injectable()
export class PostsService {
  public findAll(
    getUserParamsDto: GetPostsParamsDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },

      {
        firstName: 'Prince',
        email: 'Prince@doe.com',
      },
    ];
  }

  public findOneById(id: number) {
    return {
      id: 1234,
      firstName: 'Prince',
      email: 'Prince@doe.com',
    };
  }
}
