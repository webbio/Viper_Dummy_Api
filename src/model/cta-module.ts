import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";

export class CTAModule extends WordPressPostModule {
  @ApiModelProperty()
  public titleText: string;
  @ApiModelProperty()
  public subTitleText: string;
  @ApiModelProperty()
  public seeRecipeButtomText: string;
  @ApiModelProperty()
  public seeAllRecipesButtomText: string;

  @ApiModelProperty()
  public backgroundImgURL: string;
}

export const generateDummyCTAModule = (): CTAModule => {
  return {
    titleText: "Maak je eigen biologische wraps!",
    subTitleText: "Binnen een half uur je eigen biologische hoemoes. Lees hier hoe dat moet!",
    seeRecipeButtomText: "Bekijk recept",
    seeAllRecipesButtomText: "Bekijk alle recepten",
    backgroundImgURL: "",
    id: uuid(),
    name: "CTA",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
