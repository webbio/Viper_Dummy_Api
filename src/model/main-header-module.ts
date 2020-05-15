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
  @ApiModelProperty({ required: false })
  public topTitle: string;

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
      color: "#DDEDED",
    },
    curve: {
      background: {
        color: "#DDEDED",
      },
      verticalAlignment: "bottom",
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingLarge,
      mobilePadding: paddingMobile.mobilePaddingLarge,
    },
    name: "MainHeaderModule",
    topTitle: "Terrasana",
    topMargin: "0px",
    bottomMargin: "0px",
    headerText: "Proef en voel dat het goed is.",
    welcomeImage: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/homepage-main-header-1.jpg",
    bigCardLeft: {
      content: "Producten",
      route: "/product-line-overview",
      imageUrl: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/coconut.jpg",
    },
    bigCardRight: {
      content: "Recepten",
      route: "/recipe-overview",
      imageUrl: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/soup.jpg",
    },
    smallCard1: {
      type: "filled",
      content: "Nieuws",
      route: "/nieuws/",
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
