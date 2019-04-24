import { ApiModelProperty } from "@nestjs/swagger";
import { MarkerInformation } from "./markers-info";
import { MapLocation } from "./location";

export class Markers {
  @ApiModelProperty()
  public id: string;
  @ApiModelProperty()
  public displayName: string;
  @ApiModelProperty()
  public location: MapLocation;
  @ApiModelProperty({ type: [MarkerInformation] })
  public workingHours?: MarkerInformation[];
  @ApiModelProperty()
  public streetNameAndNumber?: string;
  @ApiModelProperty()
  public postalCode?: string;
  @ApiModelProperty()
  public city?: string;
  @ApiModelProperty()
  public phone?: string;
  @ApiModelProperty()
  public fax?: string;
}
