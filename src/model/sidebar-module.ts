import { WordPressPostModule } from "./wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { FilterModule, generateDummyFilterModule } from "./filter";
import {
  RecentPostsModule,
  generateDummyRecentPostsModule
} from "./recent-posts";
import uuid = require("uuid");

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
    filters: generateDummyFilterModule(),
    sidebarBox: "",
    searchItem: {
      placeholder: "Zoek je product"
    },
    recentPosts: generateDummyRecentPostsModule()
  };
};
