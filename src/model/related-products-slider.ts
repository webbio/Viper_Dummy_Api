import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from "@nestjs/swagger";
import { Module } from "@nestjs/common";
import { PageController } from "src/page/page.controller";
import { RelatedProduct } from "./related-product";

@Module({
  controllers: [PageController]
})
export class RelatedProductsSlider extends WordPressPostModule {
  @ApiModelProperty({ type: [RelatedProduct] })
  public relatedProducts: RelatedProduct[];

  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public buttonText: string;
}

export const generateDummyRelatedProductsSlider = (): RelatedProductsSlider => {
  return {
    id: uuid(),
    name: "RelatedProductsSlider",
    topMargin: "0px",
    bottomMargin: "0px",
    title: "Wij hebben veel producten in huis!",
    buttonText: "Bekijk alle producten",
    relatedProducts: [
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "100% Bruine rijstnoedels",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Boekweitnoedels met zoete aardappel",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",

        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "pino",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      }
    ]
  } as RelatedProductsSlider;
};
