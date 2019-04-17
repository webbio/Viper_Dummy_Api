import { ApiModelProperty } from "@nestjs/swagger";


export class information {

  @ApiModelProperty()
  public day: string;
  @ApiModelProperty()
  public opensAt: number;
  @ApiModelProperty()
  public closesAt: number;

  
}