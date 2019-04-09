import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { Link } from "./link";

export class NavBarModule extends WordPressPostModule {
  @ApiModelProperty({ type: [Link] })
  public topLinks: Link[];

  @ApiModelProperty({ type: [Link] })
  public botLinks: Link[];

  @ApiModelProperty()
  public first_logo: string;

  @ApiModelProperty()
  public second_logo: string;
}

export const generateDummyNavBarModule = (): NavBarModule => {
  return {
    topLinks: [
      { content: "Over ons", route: "about-us" },
      { content: "Nieuws", route: "news" },
      { content: "FAQ", route: "news" },
      { content: "Zakelijk", route: "news" },
      { content: "Contact", route: "news" }
    ],
    botLinks: [
      { content: "Producten", route: "products" },
      { content: "Recepten", route: "products" },
      { content: "Verkooppunten", route: "products" }
    ],
    first_logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/group.svg",
    second_logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/group-2.svg",
    id: uuid(),
    name: "Navbar",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
