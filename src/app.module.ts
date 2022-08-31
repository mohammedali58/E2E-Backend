import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import MainController from './api';
import { UserServiceModule } from './application/user/user.module';
@Module({
  imports: [UserServiceModule],
  controllers: MainController,
  providers: [AppService],
})
export class AppModule {}
