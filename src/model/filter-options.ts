import { ApiModelProperty } from '@nestjs/swagger';

export class FilterOptions {
  @ApiModelProperty()
  public content?: string;
  @ApiModelProperty()
  public value?: any;
  @ApiModelProperty()
  public id?: number;
}
