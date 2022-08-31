import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DBConnection } from './persistance/DBConnection/localDB_Sync';
import ModelsAssociate from './persistance/ModelAssociate/modelsAssociate';
import { ModelsInit } from './persistance/ModelInit/modelsInit';

async function bootstrap() {
 
  DBConnection(true);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
