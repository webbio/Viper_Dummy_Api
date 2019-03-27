import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageController } from './page/page.controller';
import { PageService } from './page/page.service';

@Module({
  imports: [],
  controllers: [AppController, PageController],
  providers: [AppService, PageService],
})
export class AppModule {}
