import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { buttonCTA } from "./button-cta";

export class CTAModule extends WordPressPostModule {
  @ApiModelProperty()
  public titleText: string;
  @ApiModelProperty()
  public bodyText: string;
  @ApiModelProperty()
  public buttonLeft: buttonCTA;
  @ApiModelProperty()
  public buttonRight: buttonCTA;
  @ApiModelProperty()
  public imageURL: string;
}
const buttonLeftData = (): buttonCTA => {
  return {
    href: "#",
    target: "_blank",
    title: "Bekijk recept",
    variant: "primary",
    type: "",
    icon: "",
    onClick: ""
  };
};
export const generateDummyCTAModule = (): CTAModule => {
  return {
    titleText: "Maak je eigen biologische wraps!",
    bodyText: "Binnen een half uur je eigen biologische hoemoes. Lees hier hoe dat moet!",
    buttonLeft: {
      href: "#",
      target: "_blank",
      title: "Bekijk recept",
      variant: "primary",
      type: "",
      icon: "",
      onClick: ""
    },
    buttonRight: {
      href: "#",
      target: "_blank",
      title: "Bekijk alle recepten",
      variant: "secondary",
      type: "",
      icon: "",
      onClick: ""
    },
    imageURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/rectangle-5.png",
    id: uuid(),
    name: "CTA",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
