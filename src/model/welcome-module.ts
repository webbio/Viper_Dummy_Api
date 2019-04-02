import { WordPressPostModule } from "./wordpress-post-module";
import { ImageButton } from "./image-button";
import { ButtonType } from "../enums/button-type";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";

export class WelcomeModule extends WordPressPostModule {
  @ApiModelProperty()
  public headerText: string;

  @ApiModelProperty()
  public bodyText: string;

  @ApiModelProperty()
  public topBackgroundImageUrl: string;

  @ApiModelProperty()
  public bottomBackgroundPatternUrl: string;

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
    name: "welcomeModule",
    topMargin: "5px",
    bottomMargin: "5px",
    headerText: "Header text!",
    bodyText: "Body text!",
    bottomBackgroundPatternUrl:
      "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png",
    topBackgroundImageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/rectangle-copy.png",
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
