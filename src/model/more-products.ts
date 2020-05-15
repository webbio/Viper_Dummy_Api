import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from "@nestjs/swagger";
import { Module } from "@nestjs/common";
import { PageController } from "src/page/page.controller";
import { RelatedProduct } from "./related-product";

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

  @ApiModelProperty()
  public moreProductsLink?: string;
}

export const generateDummyMoreProducts = (): MoreProducts => {
  return {
    id: "9",
    name: "MoreProducts",
    topMargin: "0px",
    bottomMargin: "0px",
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    title: "Meer Noedels!",
    buttonText: "Meer noedels",
    moreProductsLink: "/product-line-single",
    background: {
      color: "#DDEDED",
    },
    curve: {
      verticalAlignment: "bottom",
      horizontalAlignment: "right",
      background: {
        color: "#fff",
      },
    },
    relatedProducts: [
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",
        URL: "/product-single",
      },
      {
        title: "Boekweitnoedels met zoete aardappel",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
        URL: "/product-single",
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",
        URL: "/product-single",
      },
      {
        title: "Bruine rijstnoedels met wakame",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
        URL: "/product-single",
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",
        URL: "/product-single",
      },
    ],
  } as MoreProducts;
};
