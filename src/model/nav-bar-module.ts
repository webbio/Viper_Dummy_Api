import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { Link } from "./link";

export class NavBarModule extends WordPressPostModule {
  @ApiModelProperty({ type: [Link] })
  public topLinks: Link[];

  @ApiModelProperty({ type: [Link] })
  public botLinks: Link[];
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
    id: uuid(),
    name: "Navbar",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
