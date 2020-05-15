import uuid = require("uuid");
import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";

export class NotFoundModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public text: string;
  @ApiModelProperty()
  public backButtonText: string;
  @ApiModelProperty()
  public homeButtonText: string;
}

export const generateDummyNotFoundModule = (): NotFoundModule => {
  return {
    id: uuid(),
    title: "Oeps, er is iets mis gegaan",
    text: "Aenean id lorem eleifend, malesuada arcu afringilla mauris. Pellentesque dolor lacus, luctus.",
    backButtonText: "Terug naar vorige pagina",
    homeButtonText: "Naar home",
    topMargin: "",
    background: { color: "#DDEDED" },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    bottomMargin: "",
    name: "NotFoundModule",
  };
};
