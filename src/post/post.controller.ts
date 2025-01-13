import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Post()
  public createposts(@Body() createPostsDto: CreatePostDto) {
    console.log(createPostsDto instanceof CreatePostDto);
    return 'You sent a post request to users endpoint';
  }

  // @Patch()
  // public patchUser(@Body() patchUserDto: PatchUsersDto) {
  //   return patchUserDto;
  // }
}
