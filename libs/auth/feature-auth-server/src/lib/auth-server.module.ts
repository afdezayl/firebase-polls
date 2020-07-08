import { Module } from '@nestjs/common';
import { AuthServerService } from './auth-server.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthServerService],
  exports: [AuthServerService],
})
export class AuthServerModule {}
