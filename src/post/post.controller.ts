import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostsDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // @Get('/:userId?')
  // public getPosts(@Param('userId') userId: string) {
  //   return this.postsService.findAll(userId);
  // }

  @ApiOperation({
    summary: 'Creates a new blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully',
  })
  @Post()
  public createposts(@Body() createPostsDto: CreatePostDto) {
    console.log(createPostsDto instanceof CreatePostDto);
    console.log(createPostsDto, 'You sent a post request to users endpoint');
  }

  @ApiOperation({
    summary: 'Updating existing blog post',
  })
  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if your post is created successfully',
  })
  @Patch()
  public patchpost(@Body() patchPostDto: PatchPostsDto) {
    // return patchUserDto;
    console.log(patchPostDto);
  }
}
