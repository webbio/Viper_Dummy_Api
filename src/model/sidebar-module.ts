import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";

export class SidebarModule extends WordPressPostModule {
  @ApiModelProperty()
  public placeholder?: string;
  @ApiModelProperty()
  public filters?: any;
  @ApiModelProperty()
  public sidebarBox?: any;
  @ApiModelProperty()
  public searchItem?: any;
  @ApiModelProperty()
  public recentPosts?: any;
}

export const generateDummySidebarModule = (): SidebarModule => {
  return {
    placeholder: "Zoek je product",
    filters: [
      {
        args: [
          {
            label: "Glutenvrij",
            slug: "Glutenvrij"
          },
          {
            label: "Vegetarisch",
            slug: "vegetarisch"
          },
          {
            label: "Veganistisch",
            slug: "veganistisch"
          }
        ],
        title: "Snel filteren"
      },
      {
        args: [
          {
            label: "Zeewieren",
            slug: "zeewieren"
          },
          {
            label: "Paddenstoelen en seitan",
            slug: "paddenstoelen-en-seitan"
          },
          {
            label: "Veganistisch",
            slug: "veganistisch-2"
          },
          {
            label: "Sojasauzen",
            slug: "sojasauzen"
          },
          {
            label: "Rijst, bonen, zaden",
            slug: "rijst-bonen-zaden"
          },
          {
            label: "Paddenstoelen en seitan",
            slug: "paddenstoelenenseitan"
          },
          {
            label: "Noedels",
            slug: "noedels"
          }
        ],
        title: "Producten"
      }
    ],
    sidebarBox: "",
    searchItem: {
      placeholder: "Zoek je product"
    },
    recentPosts: [
      {
        args: [
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            title: "Recept van de maand: freakshake met…"
          },
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            title: "Aenean ullamcorper mi sit amet lacus accumsan..."
          },
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            title: "Duis blandit tortor a erat"
          }
        ],
        button: {
          link: "/",
          title: "Meer nieuws"
        },
        title: "News"
      },
      {
        args: [
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            title: "Nunc a dolor eget nisi accumsan mollis"
          },
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            title: "Etiam vestibulum lectus ac mauris volutpat"
          },
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            title: "Donec vitae leo et quam facilisis tristique"
          }
        ],
        button: {
          link: "/",
          title: "Meer nieuws"
        },
        title: "Recepten"
      }
    ],

    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "SidebarComponent"
  };
};
