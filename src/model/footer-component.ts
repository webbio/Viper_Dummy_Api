import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { footerSection } from "./footer-section";
import { Link } from "./link";

export class FooterModule extends WordPressPostModule {
  @ApiModelProperty({ type: [footerSection] })
  public footerSections: footerSection[];
  @ApiModelProperty({ type: [Link] })
  public footerLinks: Link[];
}

export const generateDummyFooterModule = (): FooterModule => {
  return {
    footerSections: [
      {
        title: "Onze producten",
        links: [
          { content: "Triangle", route: "route" },
          { content: "Latte", route: "route" },
          { content: "Notenpasta", route: "route" },
          { content: "Row superfood", route: "route" },
          { content: "Mideterrane keuken", route: "route" },
          { content: "Japan moderne keuken", route: "route" }
        ]
      },
      {
        title: "Terrasana",
        links: [
          { content: "Over ons", route: "route" },
          { content: "Nieuws", route: "route" },
          { content: "FAQ", route: "route" },
          { content: "Alle produten", route: "route" },
          { content: "Recepten", route: "route" }
        ]
      },
      {
        title: "Koken met Terrasana",
        links: [
          { content: "Raw Superfood Recepten", route: "route" },
          { content: "RawSuperfood Smoothies", route: "route" },
          { content: "Ontbijt", route: "route" },
          { content: "Voorgerecht", route: "route" },
          { content: "Soepen", route: "route" },
          { content: "Pannenkoeken", route: "route" }
        ]
      },
      {
        title: "Contact",
        links: [
          { content: "Verkooppunten", route: "route" },
          { content: "Direct contact", route: "route" },
          { content: "Zakelijk", route: "route" }
        ]
      }
    ],
    footerLinks: [
      {
        content: "Privacy policy",
        route: "route"
      },
      {
        content: "Algemene voorwaarden",
        route: "route"
      },
      {
        content: "Disclaimer",
        route: "route"
      }
    ],

    //footerLinks: [{ content: "content", route: "" }, { content: "content", route: "" }],

    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "FooterComponent"
  };
};
