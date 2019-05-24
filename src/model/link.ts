import { ApiModelProperty } from '@nestjs/swagger';

export class Link {
  @ApiModelProperty()
  public content: string;

  @ApiModelProperty()
  public route: string;

  @ApiModelProperty({ required: false })
  public color?: string;

  @ApiModelProperty({ required: false })
  public hoverColor?: string;

  @ApiModelProperty({ required: false })
  public icon?: string;
}
