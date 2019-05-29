import { Injectable } from '@nestjs/common';
import uuid = require('uuid');
import { ProductLineOverviewModule, ProductLineOverviewCard } from './product-line-card';
import { generateProductLineCardList } from './product-line-generator';
import { getProductCards } from './product-line-methods';
@Injectable()
export class ProductLineOverviewService {
  public getProductCards(filter?: string, category?: string, diet?: string): ProductLineOverviewModule {
    return getProductCards(filter, category, diet);
  }
}
