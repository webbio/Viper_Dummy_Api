import { WordPressPostModule } from "./wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { FilterModule } from "./filter";
import { RecentPostsModule } from "./recent-posts";

export class SidebarModule {
  @ApiModelProperty()
  public placeholder?: string;
  @ApiModelProperty({ type: [FilterModule] })
  public filters?: FilterModule[];
  @ApiModelProperty()
  public sidebarBox?: any;
  @ApiModelProperty()
  public searchItem?: any;
  @ApiModelProperty({ type: [RecentPostsModule] })
  public recentPosts?: RecentPostsModule[];
}

export const generateDummySidebarModule = (): SidebarModule => {
  return {
    placeholder: "Zoek je product",
    filters: [
      {
        options: [
          {
            label: "Glutenvrij",
            slug: "Glutenvrij",
            isClicked: false,
            id: 1
          },
          {
            label: "Vegetarisch",
            slug: "vegetarisch",
            isClicked: false,
            id: 2
          },
          {
            label: "Veganistisch",
            slug: "veganistisch",
            isClicked: false,
            id: 3
          }
        ],
        title: "Snel filteren",
        max: 2
      },
      {
        options: [
          {
            label: "Zeewieren",
            slug: "zeewieren",
            isClicked: false,
            id: 4
          },
          {
            label: "Paddenstoelen en seitan",
            slug: "paddenstoelen-en-seitan",
            isClicked: false,
            id: 5
          },
          {
            label: "Veganistisch",
            slug: "veganistisch-2",
            isClicked: false,
            id: 6
          },
          {
            label: "Sojasauzen",
            slug: "sojasauzen",
            isClicked: false,
            id: 7
          },
          {
            label: "Rijst, bonen, zaden",
            slug: "rijst-bonen-zaden",
            isClicked: false,
            id: 8
          },
          {
            label: "Paddenstoelen en seitan",
            slug: "paddenstoelenenseitan",
            isClicked: false,
            id: 9
          },
          {
            label: "Noedels",
            slug: "noedels",
            isClicked: false,
            id: 10
          }
        ],
        title: "Producten",
        max: 4
      }
    ],
    sidebarBox: "",
    searchItem: {
      placeholder: "Zoek je product"
    },
    recentPosts: [
      {
        posts: [
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            content: "Recept van de maand: freakshake met…"
          },
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            content: "Aenean ullamcorper mi sit amet lacus accumsan..."
          },
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            content: "Duis blandit tortor a erat"
          }
        ],
        button: {
          route: "/",
          content: "Meer nieuws"
        },
        title: "News"
      },
      {
        posts: [
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            content: "Nunc a dolor eget nisi accumsan mollis"
          },
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            content: "Etiam vestibulum lectus ac mauris volutpat"
          },
          {
            image: "@assets/images/rectangle-3.png",
            link: "/",
            content: "Donec vitae leo et quam facilisis tristique"
          }
        ],
        button: {
          route: "/",
          content: "Meer nieuws"
        },
        title: "Recepten"
      }
    ]
  };
};
