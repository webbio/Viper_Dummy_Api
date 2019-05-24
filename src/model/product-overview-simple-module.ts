import { WordPressPostModule } from './wordpress-post-module';
import {
  ProductLineFilter,
  generateProductLineFilter,
} from './product-line-filter';
import { ApiModelProperty } from '@nestjs/swagger';
import uuid = require('uuid');
import { ProductCard, generateDummyProductCard } from './product-card';

export class ProductOverviewSimpleModule extends WordPressPostModule {
  @ApiModelProperty()
  public filter: ProductLineFilter;
  @ApiModelProperty({ type: [ProductCard] })
  public productCardList: ProductCard[];
  @ApiModelProperty()
  public totalItems: number;
}

export const generateProductOverviewSimpleModule = (): ProductOverviewSimpleModule => {
  return {
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'ProductOverviewSimpleModule',
    filter: generateProductLineFilter(),
    productCardList: generateDummyProductCard(),
    totalItems: 5,
  };
};
