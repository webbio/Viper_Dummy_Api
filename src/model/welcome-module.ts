import { ApiModel, ApiModelProperty } from "swagger-express-ts";
import { WordPressPostModule } from "./wordpress-post-module";
import { ImageButton } from "./image-button";
import { ButtonType } from "../enums/button-type";
import * as uuid from "uuid";

@ApiModel({
  description: "PageModel description"
})
export class WelcomeModule extends WordPressPostModule {
  @ApiModelProperty({
    description: "Header text",
    example: ["Proef en voel dat het goed is"],
    required: true
  })
  public headerText: string;

  @ApiModelProperty({ description: "Body text", example: ["Lorem Ipsum etc."], required: true })
  public bodyText: string;

  @ApiModelProperty({ description: "Image url for the top background of the control", required: true })
  public topBackgroundImageUrl: string;

  @ApiModelProperty({
    description: "Image url for the bottom background of the control",
    example: ["Lorem Ipsum etc."],
    required: true
  })
  public bottomBackgroundPatternUrl: string;

  @ApiModelProperty({ description: "Buttons shown in the module", required: true })
  public buttons: ImageButton[];
}

export const generateDummyWelcomeModule = (): WelcomeModule => {
  return {
    id: uuid(),
    name: "welcomeModule",
    topMargin: "5px",
    bottomMargin: "5px",
    headerText: "Header text!",
    bodyText: "Body text!",
    bottomBackgroundPatternUrl: "",
    topBackgroundImageUrl: "",
    buttons: [
      { buttonType: ButtonType.Large, content: "Producten", route: "/products", imageUrl: "" },
      { buttonType: ButtonType.Large, content: "Recepten", route: "/recipes", imageUrl: "" },
      {
        buttonType: ButtonType.Medium,
        content: "Recept van de maand: freakshake met curcuma latte!",
        route: "/products",
        imageUrl: ""
      },
      {
        buttonType: ButtonType.Medium,
        content: "Gezonde snack? Probeer onze nieuwe snackmixen!",
        route: "/products",
        imageUrl: ""
      },
      {
        buttonType: ButtonType.Medium,
        content: "RECEPT: vegan & glutenvrij courgettebrood",
        route: "/products",
        imageUrl: ""
      }
    ]
  } as WelcomeModule;
};
