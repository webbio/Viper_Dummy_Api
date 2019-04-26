import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { PageController } from "./page/page.controller";
import { PageService } from "./page/page.service";
import { DummyController } from "./dummy/dummy.controller";
import { DummyService } from "./dummy/dummy.service";
import { ProductCardController } from "./product-cards/product-card.controller";
import { ProductCardService } from "./product-cards/product-card.service";

@Module({
  imports: [],
  controllers: [PageController, DummyController, ProductCardController],
  providers: [AppService, PageService, DummyService, ProductCardService]
})
export class AppModule {}
