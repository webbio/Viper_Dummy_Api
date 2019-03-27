import { ApiModelProperty } from '@nestjs/swagger';

export class WordPressPostModule {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public name: string;

  @ApiModelProperty()
  public topMargin: string;

  @ApiModelProperty()
  public bottomMargin: string;
}
