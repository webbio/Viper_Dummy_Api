import { ApiModelProperty } from '@nestjs/swagger';

export class ImageLink {
  @ApiModelProperty()
  logo: string;
  @ApiModelProperty()
  tooltip: string;
  @ApiModelProperty()
  url: string;
}
