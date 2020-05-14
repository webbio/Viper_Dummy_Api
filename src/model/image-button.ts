import { ApiModelProperty } from "@nestjs/swagger";

export class ImageButton {
  @ApiModelProperty()
  public content: string;

  @ApiModelProperty()
  public imageUrl: string;

  @ApiModelProperty()
  public route: string;
}
