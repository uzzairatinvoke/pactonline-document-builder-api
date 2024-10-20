import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Document Templates API Documentation')
    .setDescription('<a href="https://insomnia.rest/run/?label=Document%20Templates&uri=http%3A%2F%2Flocalhost%3A3000%2Fswagger%2Fjson" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>')
    .addTag("Document Templates")
    .addServer('{base_url}', 'Local server', {
      base_url: {
        default: 'http://localhost:5775',
        description: 'The base URL of the API server in local'
      }
    })
    .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document, {
    jsonDocumentUrl: 'swagger/json',
  });
  await app.listen(process.env.APP_PORT);
}
bootstrap();
