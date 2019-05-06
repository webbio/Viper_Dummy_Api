import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { PageController } from "./page/page.controller";
import { PageService } from "./page/page.service";
import { DummyController } from "./dummy/dummy.controller";
import { DummyService } from "./dummy/dummy.service";
import { CardController } from "./card/card.controller";
import { CardService } from "./card/card.service";
import { ProductCardService } from "./product-cards/product-card.service";
import { ProductCardController } from "./product-cards/product-card.controller";

@Module({
  imports: [],
  controllers: [
    PageController,
    CardController,
    DummyController,
    ProductCardController
  ],
  providers: [
    AppService,
    PageService,
    CardService,
    DummyService,
    ProductCardService
  ]
})
export class AppModule {}
