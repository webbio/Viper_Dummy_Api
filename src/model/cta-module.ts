import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";

export class CTAModule extends WordPressPostModule {
  @ApiModelProperty()
  public titleText: string;
  @ApiModelProperty()
  public bodyText: string;
  @ApiModelProperty()
  public buttonLeftText: string;
  @ApiModelProperty()
  public buttonRightText: string;
  @ApiModelProperty()
  public imageURL: string;
}

export const generateDummyCTAModule = (): CTAModule => {
  return {
    titleText: "Maak je eigen biologische wraps!",
    bodyText: "Binnen een half uur je eigen biologische hoemoes. Lees hier hoe dat moet!",
    buttonLeftText: "Bekijk recept",
    buttonRightText: "Bekijk alle recepten",
    imageURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/rectangle-5.png",
    id: uuid(),
    name: "CTA",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
