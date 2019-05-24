import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { PageController } from 'src/page/page.controller';
import { RelatedProduct } from './related-product';

@Module({
  controllers: [PageController],
})
export class RelatedProductsSlider extends WordPressPostModule {
  @ApiModelProperty({ type: [RelatedProduct] })
  public relatedProducts: RelatedProduct[];

  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public buttonText: string;
}

export const generateDummyRelatedProductsSlider = (title: string): RelatedProductsSlider => {
  return {
    id: uuid(),
    name: 'RelatedProductsSlider',
    topMargin: '0px',
    bottomMargin: '0px',
    bottomPadding: "32px",
    background: {
      backgroundPattern: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png'
    },
    curve: {
      curveBackground:{
        backgroundColour: "#f5fafa",
      },
      decorCurveVerticalAlignment:"middle",
    },
    title,
    buttonText: 'Bekijk alle producten',
    relatedProducts: [
      {
        title: '100% Bruine rijstnoedels',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/Screenshot+2019-05-14+at+09.54.09.png',
        URL: '/product-line-single',
      },
      {
        title: '100% Bruine rijstnoedels',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',

        URL: '/product-line-single',
      },
      {
        title: '100% Bruine rijstnoedels',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
        URL: '/product-line-single',
      },
      {
        title: '100% Bruine rijstnoedels',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/7.jpg',
        URL: '/product-line-single',
      },
      {
        title: 'Boekweitnoedels met zoete aardappel',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg',
        URL: '/product-line-single',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',

        URL: '/product-line-single',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',

        URL: '/product-line-single',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/7.jpg',

        URL: '/product-line-single',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg',
        URL: '/product-line-single',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',

        URL: '/product-line-single',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',

        URL: '/product-line-single',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/1.jpg',

        URL: '/product-line-single',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/3.jpg',

        URL: '/product-line-single',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        picture: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/4.jpg',

        URL: '/product-line-single',
      },
      {
        title: 'pino',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/1.png',

        URL: '/product-line-single',
      },
    ],
  } as RelatedProductsSlider;
};