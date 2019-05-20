import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PageController } from './page/page.controller';
import { PageService } from './page/page.service';
import { DummyController } from './dummy/dummy.controller';
import { DummyService } from './dummy/dummy.service';
import { CardController } from './card/card.controller';
import { CardService } from './card/card.service';
import { ProductLineService } from './product-line/product-line.service';
import { ProductLineController } from './product-line/product-line.controller';
import { NavbarSearchController } from './navbar-search/navbar-search.controller';
import { NavbarSearchService } from './navbar-search/navbar-search.service';

@Module({
  imports: [],
  controllers: [
    PageController,
    CardController,
    DummyController,
    ProductLineController,
    NavbarSearchController,
  ],
  providers: [
    AppService,
    PageService,
    CardService,
    DummyService,
    ProductLineService,
    NavbarSearchService,
  ],
})
export class AppModule {}
