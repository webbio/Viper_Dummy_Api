import { WordPressPostModule } from "./wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { FilterModule, generateDummyFilterModule } from "./filter";
import {
  SidebarWidgetModule,
  generateDummySidebarWidgetModule
} from "./sidebar-widgets";
import uuid = require("uuid");
import { Recipe, generateDummyRecipesModule } from "./recipe";
import {
  FeaturedItemModule,
  generateDummyFeaturedItemModule
} from "./featured-item";

export class SidebarModule {
  @ApiModelProperty()
  public placeholder?: string;
  @ApiModelProperty({ type: [FilterModule] })
  public filters?: FilterModule[];
  @ApiModelProperty()
  public sidebarBox?: any;
  @ApiModelProperty()
  public searchItem?: any;
  @ApiModelProperty({ type: [SidebarWidgetModule] })
  public widgets?: SidebarWidgetModule[];
}

export const generateDummySidebarModule = (): SidebarModule => {
  return {
    placeholder: "Zoek je product",
    filters: generateDummyFilterModule(),
    sidebarBox: "",
    searchItem: {
      placeholder: "Zoek je product"
    },
    widgets: generateDummySidebarWidgetModule()
  };
};
