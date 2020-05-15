import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from "@nestjs/swagger";
import { Module } from "@nestjs/common";
import { PageController } from "src/page/page.controller";
import { RelatedProduct } from "./related-product";

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

  @ApiModelProperty()
  public buttonLink: string;
}

export const generateDummyRelatedProductsSlider = (title: string, showDetail?: boolean): RelatedProductsSlider => {
  return {
    id: uuid(),
    name: "RelatedProductsSlider",
    topMargin: "0px",
    bottomMargin: "0px",
    background: {
      pattern: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png",
    },
    curve: {
      background: {
        color: "#DDEDED",
      },
      verticalAlignment: "middle",
    },
    title,
    buttonLink: "/product-line-single",
    buttonText: "Bekijk alle producten",
    relatedProducts: [
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-1.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-4.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Boekweitnoedels met zoete aardappel",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-5.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-4.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-5.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "pino",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
    ],
  } as RelatedProductsSlider;
};

export const generateDummyRelatedProductsSliderNoCurveBackground = (
  title: string,
  showDetail?: boolean
): RelatedProductsSlider => {
  return {
    id: uuid(),
    name: "RelatedProductsSlider",
    topMargin: "0px",
    bottomMargin: "0px",

    background: {
      pattern: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png",
    },
    curve: {
      verticalAlignment: "middle",
    },
    title,
    buttonLink: "/recipe-overview",
    buttonText: "Bekijk alle producten",
    relatedProducts: [
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-1.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-4.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Boekweitnoedels met zoete aardappel",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-5.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-4.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-5.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "pino",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
    ],
  } as RelatedProductsSlider;
};

export const generateDummyRelatedProductsSlider2 = (title: string, showDetail?: boolean): RelatedProductsSlider => {
  return {
    id: uuid(),
    name: "RelatedProductsSlider",

    topMargin: "0px",
    bottomMargin: "0px",

    title,
    buttonLink: "/recipe-overview",
    buttonText: "Bekijk alle producten",
    relatedProducts: [
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-1.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-4.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Boekweitnoedels met zoete aardappel",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-5.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-4.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-5.jpg",
        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
      {
        title: "pino",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",

        URL: "/product-single",
        amount: showDetail ? "Glutenvrij - 250g" : "",
      },
    ],
  } as RelatedProductsSlider;
};
