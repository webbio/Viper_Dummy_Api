import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { buttonCTA } from "./button-cta";

export class ItemOverviewCard extends WordPressPostModule {
  @ApiModelProperty()
  public picture: string;
  @ApiModelProperty()
  public category: string;
  @ApiModelProperty()
  public leftItemText: string;
  @ApiModelProperty()
  public leftItemIcon: string;
  @ApiModelProperty()
  public rightItemText: string;
  @ApiModelProperty()
  public rightItemIcon: string;
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public buttonText: string;
  @ApiModelProperty()
  public URL: string;
}
