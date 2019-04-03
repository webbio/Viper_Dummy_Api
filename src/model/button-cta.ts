import { ApiModelProperty } from "@nestjs/swagger";

export class buttonCTA {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public variant: string;
  @ApiModelProperty()
  public href: string;
  @ApiModelProperty()
  public target: string;
  @ApiModelProperty()
  public type: string;
  @ApiModelProperty()
  public icon: string;
  @ApiModelProperty()
  public onClick: string;
}
