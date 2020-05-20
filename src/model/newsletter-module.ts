import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { Placeholder } from "./placeholder-fields";

export class NewsletterModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public text: string;
  @ApiModelProperty()
  public pictureURL: string;
  @ApiModelProperty({ type: Placeholder })
  public placeholderField: Placeholder;
}

export const generateDummyNewsletterModule = (): NewsletterModule => {
  return {
    title: "Blijf up-to-date met onze nieuwsbrief!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus feugiat ligula, et pharetra metus.",
    pictureURL:
      "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/Screenshot+2019-05-10+at+11.32.49.jpg",
    id: uuid(),
    name: "NewsletterComponent",
    bottomMargin: "0px",
    background: {
      pattern: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png",
    },
    topMargin: "0px",
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingMedium,
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingXLarge,
      mobilePadding: paddingMobile.mobilePaddingMedium,
    },
    bottomCurve: {
      background: {
        color: "white",
      },
      horizontalAlignment: "right",
      type: "in",
    },
    placeholderField: { email: "E-mailadres", name: "Naam" },
  };
};
