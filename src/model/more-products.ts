import { WordPressPostModule } from './wordpress-post-module';
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { PageController } from 'src/page/page.controller';
import { RelatedProduct } from './related-product';

@Module({
  controllers: [PageController],
})
export class MoreProducts extends WordPressPostModule {
  @ApiModelProperty({ type: [RelatedProduct] })
  public relatedProducts: RelatedProduct[];

  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public buttonText?: string;
}

export const generateDummyMoreProducts = (): MoreProducts => {
  return {
    id: '9',
    name: 'MoreProducts',
    topMargin: '0px',
    bottomMargin: '0px',
    title: 'Meer Noedels!',
    buttonText: 'Meer noedels',
    relatedProducts: [
      {
        title: '100% Bruine rijstnoedels',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png',
        URL: '/',
      },
      {
        title: 'Boekweitnoedels met zoete aardappel',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg',
        URL: '/',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png',
        URL: '/',
      },
      {
        title: 'Bruine rijstnoedels met wakame',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
        URL: '/',
      },
      {
        title: '100% Bruine rijstnoedels',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png',
        URL: '/',
      },
    ],
  } as MoreProducts;
};
