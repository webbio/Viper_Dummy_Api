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
    botLinks: [
      { color: "black", content: "Over ons", hoverColor: "green", route: "about-us" },
      { color: "black", content: "Nieuws", hoverColor: "green", route: "news" }
    ],
    topLinks: [{ color: "white", content: "Producten", hoverColor: "green", route: "products" }],
    id: uuid(),
    name: "Navbar",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
