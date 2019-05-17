import { ApiModelProperty } from '@nestjs/swagger';

export class Image {
  @ApiModelProperty()
  public url: string;
  @ApiModelProperty()
  public alt: string;
}
