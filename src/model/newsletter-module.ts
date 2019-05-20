import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";

export class NewsletterModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public text: string;
  @ApiModelProperty()
  public pictureURL: string;
}

export const generateDummyNewsletterModule = (): NewsletterModule => {
  return {
    title: "Blijf up-to-date met onze nieuwsbrief!",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus feugiat ligula, et pharetra metus.",
    pictureURL:
      "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/Screenshot+2019-05-10+at+11.32.49.jpg",
    id: uuid(),
    name: "NewsletterComponent",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
