import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return [
      {
        user: user,
        title: 'Test Title ',
        content: 'Test Content',
      },
      {
        user: user,
        title: 'Test Title 2 ',
        content: 'Test Content 2',
      },
    ];
  }

  // public findOneById(id: number) {
  //   return {
  //     id: 1234,
  //     firstName: 'Prince',
  //     email: 'Prince@doe.com',
  //   };
  // }
}
