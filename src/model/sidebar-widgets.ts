import { ApiModelProperty } from "@nestjs/swagger";
import { NewsItem, generateDummyNews } from "./news";
import { Link } from "./link";
import { Recipe, generateDummyRecipes } from "./recipe";

export class SidebarWidgetModule {
  @ApiModelProperty({ type: [NewsItem] })
  public news?: NewsItem[];
  @ApiModelProperty({ type: [Recipe] })
  public recipes?: Recipe[];
  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public max?: number;
  @ApiModelProperty()
  public button?: Link;
}
export const generateDummySidebarWidgetModule = (): SidebarWidgetModule[] => {
  return [
    {
      news: generateDummyNews(),
      recipes: [],
      button: {
        route: "/",
        content: "Meer nieuws"
      },
      title: "News",
      max: 3
    },
    {
      news: [],
      recipes: generateDummyRecipes(),
      button: {
        route: "/",
        content: "Meer nieuws"
      },
      title: "Recipes",
      max: 2
    }
  ];
};
