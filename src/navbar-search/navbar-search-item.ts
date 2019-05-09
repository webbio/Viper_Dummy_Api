import { ApiModelProperty } from '@nestjs/swagger';

export class NavbarSearchItem {
  @ApiModelProperty()
  public name?: string;
  @ApiModelProperty()
  public url?: string;
}


