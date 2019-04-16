import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { PageController } from "./page/page.controller";
import { PageService } from "./page/page.service";
import { DummyController } from "./dummy/dummy.controller";
import { DummyService } from "./dummy/dummy.service";

@Module({
  imports: [],
  controllers: [PageController, DummyController],
  providers: [AppService, PageService, DummyService]
})
export class AppModule {}
