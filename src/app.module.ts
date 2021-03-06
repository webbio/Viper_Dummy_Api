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
import { NewsOverviewController } from './news-overview/news-overview.controller';
import { NewsOverviewService } from './news-overview/news-overview.service';
import { BusinessOverviewCategoryController } from './business-overview/business-overview.controller';
import { BusinessOverviewProductLineController } from './business-overview/business-overview.controller';
import { BusinessOverviewService } from './business-overview/business-overview.service';

@Module({
  imports: [],
  controllers: [
    PageController,
    CardController,
    NewsOverviewController,
    DummyController,
    ProductLineController,
    NavbarSearchController,
    BusinessOverviewCategoryController,
    BusinessOverviewProductLineController,
  ],
  providers: [
    AppService,
    PageService,
    CardService,
    NewsOverviewService,
    DummyService,
    ProductLineService,
    NavbarSearchService,
    BusinessOverviewService,
  ],
})
export class AppModule {}
