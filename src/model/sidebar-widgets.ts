import { ApiModelProperty } from "@nestjs/swagger";
import { FilterOptionsModule } from "./filter-options";
import { NewsModule, generateDummyNewsModule } from "./news";
import { Link } from "./link";
import { Recipe, generateDummyRecipesModule } from "./recipe";

export class SidebarWidgetModule {
  @ApiModelProperty({ type: [NewsModule] })
  public news?: NewsModule[];
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
      news: generateDummyNewsModule(),
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
      recipes: generateDummyRecipesModule(),
      button: {
        route: "/",
        content: "Meer nieuws"
      },
      title: "Recipes",
      max: 2
    }
  ];
};
