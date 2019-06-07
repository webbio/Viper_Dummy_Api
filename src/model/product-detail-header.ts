import { WordPressPostModule } from './wordpress-post-module';
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { PageController } from 'src/page/page.controller';
import { Link } from './link';

@Module({
  controllers: [PageController],
})
export class ProductDetailHeader extends WordPressPostModule {
  @ApiModelProperty()
  public header: string;

  @ApiModelProperty()
  public subHeader: string;

  @ApiModelProperty()
  public body: string;

  @ApiModelProperty({ type: [Link] })
  public links: Link[];

  @ApiModelProperty()
  backButtonText: string;

  @ApiModelProperty({ type: [String] })
  listPictures: string[];
}

export const generateDummyProductDetailHeader = (): ProductDetailHeader => {
  return {
    id: '9',
    name: 'ProductDetailHeader',
    topMargin: '0px',
    bottomMargin: '0px',
    header: '100% brunine rijstnoedels',
    subHeader: 'Glutenvrij - 250g ',
    backButtonText: 'Terug naar alle noedels',
    topPadding: '70px',
    background: {
      backgroundPattern:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png',
    },
    curve: {
      decorCurveVerticalAlignment: 'bottom',
      curveBackground: {
        backgroundColour: '#f5fafa',
      },
    },
    listPictures: [
      'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
      'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/7.jpg',
      'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
    ],
    body:
      'Deze heerlijke, glutenvrije noedels zijn gemaakt van biologische bruine rijst en water. Verder niets. Ze smaken heerlijk, zijn binnen 5 minuten gaar en passen perfect bij groentegerechten, zeewier, vlees, vis en Japanse smaakmakers als miso, tamari en sesamolie.',
    links: [
      {
        content: 'Waar kan ik dit kopen?',
        route: '/',
        icon:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/product-detail-header/location-line.svg',
      },
      {
        content: 'Ik heb een vraag',
        route: '/',
        icon:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/product-detail-header/chat.svg',
      },
      {
        content: 'Mail PDF',
        route: '/',
        icon:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/product-detail-header/PDF.svg',
      },
    ],
  } as ProductDetailHeader;
};
