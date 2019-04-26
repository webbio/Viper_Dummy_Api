import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";

export class CardModel extends WordPressPostModule {
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
