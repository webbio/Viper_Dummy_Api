import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { footerSection } from "./footer-section";
import { Link } from "./link";

export class FooterModule extends WordPressPostModule {
  @ApiModelProperty({ type: [footerSection] })
  public footerSections: footerSection[];
  //@ApiModelProperty({ type: [Link] })
  //public footerLinks: Link[];
}

export const generateDummyFooterModule = (): FooterModule => {
  return {
    footerSections: [
      {
        title: "Title",
        links: [{ content: "content", route: "route" }, { content: "content", route: "route" }]
      },
      {
        title: "Title",
        links: [{ content: "content", route: "route" }, { content: "content", route: "route" }]
      }
    ],
    //footerLinks: [{ content: "content", route: "" }, { content: "content", route: "" }],

    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "FooterComponent"
  };
};
