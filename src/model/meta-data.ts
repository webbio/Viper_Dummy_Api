import { ApiModelProperty } from "@nestjs/swagger";

export class MetaData {
  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public content: string;

  @ApiModelProperty()
  public description: string;
}
