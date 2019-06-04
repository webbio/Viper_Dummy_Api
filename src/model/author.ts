import { ApiModelProperty } from '@nestjs/swagger';

export class Author {
  @ApiModelProperty()
  public iconURL: string;
  @ApiModelProperty()
  public displayName: string;
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public date: string;
  @ApiModelProperty()
  public profileURL: string;
}
