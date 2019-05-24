import { ApiModelProperty } from '@nestjs/swagger';

export class MapLocation {
  @ApiModelProperty()
  public latitude: number;
  @ApiModelProperty()
  public longitude: number;
}
