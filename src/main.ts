import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Viper Mock API')
    .setDescription(
      'The Viper Mock API, provided for the Viper front end team so they can develop without having to wait for slow back end developers. ;)',
    )
    .setVersion('1.0')
    .addTag('Viper')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    allowedHeaders: ['localhost:3000'],
  });
  await app.listen(5000);
}
bootstrap();
