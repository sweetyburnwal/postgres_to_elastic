
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupEnvFile } from './utils/utils';
import { RequestMethod } from '@nestjs/common';

setupEnvFile();

const port = 4090;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api', {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:4010',
      'http://localhost:4020',
      'http://localhost:4030',
      'http://localhost:4040',
      'http://localhost:4050',
      'http://localhost:4060',
      'http://localhost:4070',
      'http://localhost:4080',
      'http://localhost:10023',
      'http://localhost:10024',
      'https://lemon-island-0a0f63800.2.azurestaticapps.net',
      'https://dms-admin.fieldassist.io',
      '*',
    ],
    credentials: true,
  });


  await app.listen(port, () => {
    console.log(`Elastic service is running on port ${port}`);
  });
}

bootstrap();