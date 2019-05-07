import { ApiModelProperty } from "@nestjs/swagger";

export class WordPressPostModule {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public name: string;

  @ApiModelProperty()
  public topMargin: string;

  @ApiModelProperty()
  public bottomMargin: string;

  @ApiModelProperty({ required: false })
  public patternBackground?: boolean;

  @ApiModelProperty({ required: false })
  public topPadding?: string;

  @ApiModelProperty({ required: false })
  public bottomPadding?: string;

  @ApiModelProperty({ required: false })
  public decorCurveVerticalAlignment?: "top" | "bottom";

  @ApiModelProperty({ required: false })
  public decorCurveHorizontalAlignment?: "left" | "right";

  @ApiModelProperty({ required: false })
  public bgdecor?: string;

  @ApiModelProperty({ required: false })
  public pattern?: boolean;
}
