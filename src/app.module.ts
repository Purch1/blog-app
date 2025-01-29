import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.modules';
import { PostModule } from './post/post.modules';
import { AuthtModule } from './auth/auth.modules';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    PostModule,
    AuthtModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [],
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: 'admin',
      host: 'localhost',
      database: 'nestjs-blog-app',
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
