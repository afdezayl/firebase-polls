import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions'; // not working synthetic import

import { AppModule } from './app/app.module';

const server = express();
async function bootstrap(expressInstance: Express.Application) {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  return app.init();
}
const initContext = 'App start';
bootstrap(server)
  .then(() => Logger.log('Nest Ready', initContext))
  .catch((err) => Logger.error('Nest broken', err, initContext));

// Variable name is global prefix
export const api = functions.region('europe-west1').https.onRequest(server);
