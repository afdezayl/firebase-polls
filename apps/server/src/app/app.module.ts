import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthServerModule } from '@polls/auth/feature-auth-server';

@Module({
  imports: [AuthServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
