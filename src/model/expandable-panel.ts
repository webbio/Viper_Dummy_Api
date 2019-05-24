import { ApiModelProperty } from '@nestjs/swagger';

export class ExpandablePanel {
  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public content: string;
}
