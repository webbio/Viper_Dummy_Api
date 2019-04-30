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
