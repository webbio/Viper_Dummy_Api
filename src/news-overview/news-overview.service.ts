import { Injectable } from '@nestjs/common';
import uuid = require('uuid');
import { GenerateRecipesCardList } from './news-overview-generator';
import { ItemOverviewModule, ItemOverviewStateModule } from 'src/model/item-overview-module';
import { getCards } from './news-overview-methods';
@Injectable()
export class NewsOverviewService {
  public getCards(skip: number, take: number, filter?: string, category?: string): ItemOverviewStateModule {
    return getCards(skip, take, filter, category);
  }
}
