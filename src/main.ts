import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(3333);
}
bootstrap();
