import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService {
  // constructor(
  //   @Inject(forwardRef(() => AuthService))
  //   private readonly authService: AuthService,
  // ) {}

  /**
   * The method to get all the users from the databse
   */
  public findAll(
    getUserParamsDto: GetUsersParamsDto,
    limit: number,
    page: number,
  ) {
    // const isAuth = this.authService.isAuth();
    // console.log(isAuth);

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

  /**
   * Finding a user but the user Id
   */
  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'Prince',
      email: 'Prince@doe.com',
    };
  }
}
