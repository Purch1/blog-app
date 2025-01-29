import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from 'src/users/user.modules';
import { AuthService } from './providers/auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UserModule)],
  exports: [AuthService],
})
export class AuthtModule {}
