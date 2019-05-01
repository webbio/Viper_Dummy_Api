import { ApiModelProperty } from "@nestjs/swagger";
import { Link } from "./link";

export class PostsModule {
  @ApiModelProperty()
  public image?: string;
  @ApiModelProperty()
  public content?: string;
  @ApiModelProperty()
  public link?: string;
}
