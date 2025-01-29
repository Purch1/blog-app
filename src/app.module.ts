import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.modules';
import { PostModule } from './post/post.modules';
import { AuthtModule } from './auth/auth.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    AuthtModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        entities: [User],
        synchronize: true,
        port: 5432,
        username: 'postgres',
        password: 'admin',
        host: 'localhost',
        database: 'nestjs-blog-app',
      }),
    }),
    TagsModule,
    MetaOptionsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
