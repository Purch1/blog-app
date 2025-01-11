import { Injectable } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-params.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUserParamsDto: GetUsersParamsDto,
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
