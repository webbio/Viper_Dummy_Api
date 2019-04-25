import { ApiModelProperty } from "@nestjs/swagger";

export class MarkerInformation {
  @ApiModelProperty()
  public day: string;
  @ApiModelProperty()
  public opensAt: string;
  @ApiModelProperty()
  public closesAt: string;
}
