import { ApiModelProperty } from "@nestjs/swagger";

export class FilterOptionsModule {
  @ApiModelProperty()
  public content?: string;
  @ApiModelProperty()
  public value?: any;
  @ApiModelProperty()
  public id?: number;
}
