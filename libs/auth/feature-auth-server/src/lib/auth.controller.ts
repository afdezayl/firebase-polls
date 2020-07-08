import { Controller, Post, Body } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { LoginRequestDTO } from '@polls/auth/shared-auth-interfaces';

@Controller('auth')
export class AuthController {
  @Post('login')
  async validateToken(@Body() loginRequest: LoginRequestDTO) {
    console.log(loginRequest);
    /* const claims = await firebase
      .auth()
      .verifyIdToken(loginRequest.idToken, true);
    console.log(claims);*/
  }
}
