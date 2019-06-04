import { ApiModelProperty } from '@nestjs/swagger';

export class TabInformation {
  @ApiModelProperty()
  public information: string;
  @ApiModelProperty()
  public detail: string;
}
