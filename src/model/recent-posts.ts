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
          image:
            "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png",
          link: "/",
          content: "Recept van de maand: freakshake met…"
        },
        {
          image:
            "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png",
          link: "/",
          content: "Aenean ullamcorper mi sit amet lacus accumsan..."
        },
        {
          image:
            "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png",
          link: "/",
          content: "Duis blandit tortor a erat"
        }
      ],
      button: {
        route: "/",
        content: "Meer nieuws"
      },
      title: "News",
      max: 3
    },
    {
      posts: [
        {
          image:
            "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png",
          link: "/",
          content: "Nunc a dolor eget nisi accumsan mollis"
        },
        {
          image:
            "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png",
          link: "/",
          content: "Etiam vestibulum lectus ac mauris volutpat"
        },
        {
          image:
            "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png",
          link: "/",
          content: "Donec vitae leo et quam facilisis tristique"
        }
      ],
      button: {
        route: "/",
        content: "Meer nieuws"
      },
      title: "Recepten",
      max: 2
    }
  ];
};
