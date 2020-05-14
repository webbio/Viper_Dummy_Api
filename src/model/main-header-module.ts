import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import { ImageButton } from "./image-button";
import * as uuid from "uuid";
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from "@nestjs/swagger";
import { Module } from "@nestjs/common";
import { PageController } from "src/page/page.controller";

@Module({
  controllers: [PageController],
})
export class MainHeaderModule extends WordPressPostModule {
  @ApiModelProperty()
  public headerText: string;

  @ApiModelProperty()
  public bodyText: string;

  @ApiModelProperty()
  public welcomeImage: string;

  @ApiModelProperty()
  public bigCardLeft: ImageButton;

  @ApiModelProperty()
  public bigCardRight: ImageButton;

  @ApiModelProperty()
  public smallCard1: ImageButton;

  @ApiModelProperty()
  public smallCard2: ImageButton;

  @ApiModelProperty()
  public smallCard3: ImageButton;
}

export const generateDummyMainHeaderModule = (): MainHeaderModule => {
  return {
    id: uuid(),
    background: {
      pattern: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png",
    },
    curve: {
      background: {
        color: "#f5fafa",
      },
      verticalAlignment: "bottom",
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingLarge,
      mobilePadding: paddingMobile.mobilePaddingLarge,
    },
    name: "MainHeaderModule",
    topMargin: "0px",
    bottomMargin: "0px",
    headerText: "Proef en voel dat het goed is.",
    bodyText:
      "We houden van echt eten, waarmee je iets goed doet voor jezelf én de wereld om je heen. Samen. Dat is positive eating!",
    welcomeImage: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/rectangle-copy.jpg",
    bigCardLeft: {
      content: "Producten",
      route: "/product-line-overview",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/card1.jpg",
    },
    bigCardRight: {
      content: "Recepten",
      route: "/recipe-overview",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/card2.jpg",
    },
    smallCard1: {
      content: "Recept van de maand: freakshake met curcuma latte!",
      route: "/recipe-single",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/small-card1.png",
    },
    smallCard2: {
      content: "Gezonde snack? Probeer onze nieuwe snackmixen!",
      route: "/recipe-single",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/small-card2.png",
    },
    smallCard3: {
      content: "RECEPT: vegan & glutenvrij courgettebrood",
      route: "/recipe-single",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/small-card3.jpg",
    },
  } as MainHeaderModule;
};
