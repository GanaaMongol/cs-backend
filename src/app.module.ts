import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/controllers/user.controller';
import { ModuleModule } from './modules/user/module/module.module';

@Module({
  imports: [ModuleModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
