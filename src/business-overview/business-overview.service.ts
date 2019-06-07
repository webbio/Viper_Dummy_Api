import { Injectable } from '@nestjs/common';
import uuid = require('uuid');
import { ItemOverviewModule, ItemOverviewStateModule } from 'src/model/item-overview-module';
import { getCardsByCategory, getCardsByProductLine } from './business-overview-methods';
import { BusinessOverviewCategoriesState, BusinessOverviewProductsState } from 'src/model/business-overview-module';
@Injectable()
export class BusinessOverviewService {
  public getCardsByProductLine(skip: number, productLine: string, filter?: string): BusinessOverviewProductsState {
    return getCardsByProductLine(skip, filter, productLine);
  }
  public getCardsByCategory(skip: number, category: string, filter?: string): BusinessOverviewCategoriesState {
    return getCardsByCategory(skip, category, filter);
  }
}
