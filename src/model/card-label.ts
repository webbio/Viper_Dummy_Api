import { ApiModelProperty } from "@nestjs/swagger";

export class CardLabel {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public icon: string;
}
