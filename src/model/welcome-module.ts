import { WordPressPostModule } from "./wordpress-post-module";
import { ImageButton } from "./image-button";
import { ButtonType } from "../enums/button-type";
import * as uuid from "uuid";
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from "@nestjs/swagger";
import { Module } from "@nestjs/common";
import { PageController } from "src/page/page.controller";

@Module({
  controllers: [PageController]
})
export class WelcomeModule extends WordPressPostModule {
  @ApiModelProperty()
  public headerText: string;

  @ApiModelProperty()
  public bodyText: string;

  @ApiModelProperty()
  public welcomeImage: string;

  @ApiModelProperty()
  public mainButton1: ImageButton;

  @ApiModelProperty()
  public mainButton2: ImageButton;

  @ApiModelProperty()
  public smallButton1: ImageButton;

  @ApiModelProperty()
  public smallButton2: ImageButton;

  @ApiModelProperty()
  public smallButton3: ImageButton;
}

export const generateDummyWelcomeModule = (): WelcomeModule => {
  return {
    id: uuid(),
    name: "WelcomeModule",
    topMargin: "0px",
    bottomMargin: "0px",
    headerText: "Proef en voel dat het goed is.",
    patternBackground: true,
    decorCurveVerticalAlignment: "bottom",
    bottomPadding: "50px",
    bodyText:
      "We houden van echt eten, waarmee je iets goed doet voor jezelf én de wereld om je heen. Samen. Dat is positive eating!",
    welcomeImage: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/rectangle-copy.png",
    mainButton1: {
      buttonType: ButtonType.Large,
      content: "Producten",
      route: "/products",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/card1.png"
    },
    mainButton2: {
      buttonType: ButtonType.Large,
      content: "Recepten",
      route: "/recipes",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/card2.png"
    },
    smallButton1: {
      buttonType: ButtonType.Medium,
      content: "Recept van de maand: freakshake met curcuma latte!",
      route: "/products",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/small-card1.png"
    },
    smallButton2: {
      buttonType: ButtonType.Medium,
      content: "Gezonde snack? Probeer onze nieuwe snackmixen!",
      route: "/products",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/small-card2.png"
    },
    smallButton3: {
      buttonType: ButtonType.Medium,
      content: "RECEPT: vegan & glutenvrij courgettebrood",
      route: "/products",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/small-card3.png"
    }
  } as WelcomeModule;
};
