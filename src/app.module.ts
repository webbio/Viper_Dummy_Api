import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { PageController } from "./page/page.controller";
import { PageService } from "./page/page.service";
import { DummyController } from "./dummy/dummy.controller";
import { DummyService } from "./dummy/dummy.service";
import { CardController } from "./card/card.controller";
import { CardService } from "./card/card.service";
import { ProductLineService } from "./product-line/product-line.service";
import { ProductLineController } from "./product-line/product-line.controller";

@Module({
  imports: [],
  controllers: [
    PageController,
    CardController,
    DummyController,
    ProductLineController
  ],
  providers: [
    AppService,
    PageService,
    CardService,
    DummyService,
    ProductLineService
  ]
})
export class AppModule {}
