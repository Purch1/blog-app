import { Module } from '@nestjs/common';
import { PostsController } from './post.controller';
import { PostsService } from './providers/posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostModule {}
