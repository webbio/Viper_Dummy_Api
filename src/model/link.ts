import { ApiModelProperty } from "@nestjs/swagger";

export class Link {
  @ApiModelProperty()
  public content: string;

  @ApiModelProperty()
  public route: string;

  @ApiModelProperty()
  public color?: string;

  @ApiModelProperty()
  public hoverColor?: string;
}
