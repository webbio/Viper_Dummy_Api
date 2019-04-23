import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from "@nestjs/swagger";
import { Module } from "@nestjs/common";
import { PageController } from "src/page/page.controller";
import { Recipe } from "./recipe";

@Module({
  controllers: [PageController]
})
export class FeaturedItemModule extends WordPressPostModule {
  @ApiModelProperty({ type: [Recipe] })
  public recipes: Recipe[];

  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public buttonText: string;
}

export const generateDummyFeaturedItemModule = (): FeaturedItemModule => {
  return {
    id: uuid(),
    name: "featured item module",
    topMargin: "0px",
    bottomMargin: "0px",
    title: "Recepten met Noedels",
    buttonText: "Bekijk meer recepten",
    recipes: [
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        time: "20 minuten",
        numPeople: "1 persoon",
        content: "Soba met frisse gember-sojasaus",
        category: "Recept",
        buttonText: "Bekijk meer recepten"
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        time: "20 minuten",
        numPeople: "2 persoon",
        content: "Yaki soba (gebakken sobanoedels)",
        category: "Recept",
        buttonText: "Bekijk meer recepten"
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        time: "15 minuten",
        numPeople: "3 persoon",
        content: "Udon met daikon in miso-tamarisaus",
        category: "Recept",
        buttonText: "Bekijk meer recepten"
      }
    ]
  } as FeaturedItemModule;
};
