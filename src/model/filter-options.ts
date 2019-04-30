import { ApiModelProperty } from "@nestjs/swagger";

export class FilterOptionsModule {
  @ApiModelProperty()
  public label?: string;
  @ApiModelProperty()
  public slug?: string;
  @ApiModelProperty()
  public isClicked?: boolean;
  @ApiModelProperty()
  public id?: number;
}
