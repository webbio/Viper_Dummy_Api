import { ApiModelProperty } from '@nestjs/swagger';

export class TabsHeader {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public tabIndex: number;
}
