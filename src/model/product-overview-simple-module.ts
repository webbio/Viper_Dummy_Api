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
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
  };
};

export const generateProductOverviewSimpleModuleCurvePatternBottom = (): ProductOverviewSimpleModule => {
  return {
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'ProductOverviewSimpleModule',
    filter: generateProductLineFilter(),
    productCardList: generateDummyProductCard(),
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    totalItems: 5,
    background: {
      backgroundColour: '#f5fafa',
    },
    curve: {
      decorCurveVerticalAlignment: 'bottom',
      decorCurveHorizontalAlignment: 'right',

      curveBackground: {
        backgroundPattern:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png',
      },
    },
  };
};
