import { ApiModelProperty } from "@nestjs/swagger";
import { FilterOptionsModule } from "./filter-options";
import { PostsModule } from "./posts";
import { Link } from "./link";

export class RecentPostsModule {
  @ApiModelProperty({ type: [PostsModule] })
  public posts?: PostsModule[];
  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public max?: number;
  @ApiModelProperty()
  public button?: Link;
}
export const generateDummyRecentPostsModule = (): RecentPostsModule[] => {
  return [
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
  ];
};
