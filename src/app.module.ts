import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.modules';
import { UsersController } from './users/users.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
