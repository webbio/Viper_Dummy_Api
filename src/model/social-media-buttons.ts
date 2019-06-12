import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { buttonFooter } from "./buttonFooter";

export class SocialMediaButtons extends WordPressPostModule {
  @ApiModelProperty({ type: [buttonFooter] })
  public footerButtons: buttonFooter[];
}

export const generateDummySocialMediaButtons = (): SocialMediaButtons => {
  return {
    footerButtons: [
      {
        href: "https://facebook.com",
        icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/facebook.svg"
      },
      {
        href: "https://linkedin.com",
        icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/linkedin.svg"
      },
      {
        href: "https://twitter.com",
        icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/twitter.svg"
      },
      {
        href: "mailto:info@webbio.nl",
        icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/mail.svg"
      }
    ],

    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "FooterComponent"
  };
};
