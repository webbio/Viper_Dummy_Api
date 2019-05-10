import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from "@nestjs/swagger";
import { Module } from "@nestjs/common";
import { PageController } from "src/page/page.controller";
import { Recipe } from "./recipe";

@Module({
  controllers: [PageController]
})
export class GallerySliderModule extends WordPressPostModule {
  @ApiModelProperty({ type: [String] })
  public url: string[];
}

export const generateDummyGallerySliderModule = (): GallerySliderModule => {
  return {
    id: uuid(),
    name: "gallerySlider",
    topMargin: "0px",
    bottomMargin: "0px",
    url: [
      "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
      "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/card1.png"
    ]
  } as GallerySliderModule;
};
