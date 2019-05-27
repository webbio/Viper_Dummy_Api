import { Injectable } from '@nestjs/common';
import uuid = require('uuid');
import { GenerateRecipesCardList } from './card-generator';
import { ItemOverviewModule, ItemOverviewStateModule } from 'src/model/item-overview-module';
import { getCards } from './card-methods';
@Injectable()
export class CardService {
  public getCards(skip: number, take: number, filter?: string): ItemOverviewStateModule {
    return getCards(skip, take, filter);
  }
}
