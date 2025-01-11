import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUsersDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';
import { PatchUsersDto } from './dtos/patch-user.dto';
import { PostsService } from './providers/posts.service';

@Controller('users')
export class PostsController {
  constructor(private readonly usersService: PostsService) {}

  @Get('/:id?')
  public getUsers(
    @Param() getUserParamsDto: GetUsersParamsDto | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: any,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: any,
  ) {
    return this.usersService.findAll(getUserParamsDto, limit, page);
  }

  @Post()
  public createUsers(@Body() createUsersDto: CreateUsersDto) {
    console.log(createUsersDto instanceof CreateUsersDto);
    return 'You sent a post request to users endpoint';
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUsersDto) {
    return patchUserDto;
  }
}
