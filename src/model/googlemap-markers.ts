import { ApiModelProperty } from "@nestjs/swagger";
import {information} from "./markers-info"

export class markers {
  @ApiModelProperty()
  public latitude: number;
  @ApiModelProperty()
  public longitude: number;
  @ApiModelProperty()
  public isOpen?: boolean;
  @ApiModelProperty({ type: [information] })
  public workingHours?: information[];
  @ApiModelProperty()
  public street?: string;
  @ApiModelProperty()
  public address?: string;
  @ApiModelProperty()
  public city?: string;
  @ApiModelProperty()
  public phone?: number;
  @ApiModelProperty()
  public fax?: number;
  
}