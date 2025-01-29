import { Module } from '@nestjs/common';
import { PostsController } from './post.controller';
import { PostsService } from './providers/posts.service';
import { UserModule } from 'src/users/user.modules';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UserModule],
})
export class PostModule {}
