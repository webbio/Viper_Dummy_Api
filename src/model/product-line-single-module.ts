import {
  WordPressPostModule,
  paddingDesktop,
  paddingMobile,
} from './wordpress-post-module';
import {
  ProductLineFilter,
  generateProductLineFilter,
} from './product-line-filter';
import { ApiModelProperty } from '@nestjs/swagger';
import uuid = require('uuid');
import { ProductCard, generateDummyProductCard } from './product-card';
import { CategoryCard, generateDummyCategoryCard } from './category-card';

export class ProductLineSingleModule extends WordPressPostModule {
  @ApiModelProperty()
  public filter: ProductLineFilter;
  @ApiModelProperty({ type: [ProductCard] })
  public productCardList: ProductCard[];
  @ApiModelProperty({ type: [CategoryCard] })
  public categoryCardList: CategoryCard[];
}

export const generateProductLineSingleModule = (): ProductLineSingleModule => {
  return {
    id: uuid(),
    topMargin: '',
    bottomMargin: '',

    background: {
      backgroundColour: '#f5fafa',
    },
    curve: {
      curveBackground: {
        backgroundPattern:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png',
      },
      decorCurveVerticalAlignment: 'bottom',
      decorCurveHorizontalAlignment: 'right',
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    name: 'ProductLineSingleModule',
    filter: generateProductLineFilter(),
    productCardList: generateDummyProductCard(),
    categoryCardList: generateDummyCategoryCard(),
  };
};
