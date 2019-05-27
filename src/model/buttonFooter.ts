import { ApiModelProperty } from '@nestjs/swagger';

export class buttonFooter {
  @ApiModelProperty()
  public href: string;
  @ApiModelProperty()
  public icon: string;
}
