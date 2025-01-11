import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.modules';
import { PostModule } from './post/post.modules';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
