import { ApiModelProperty } from "@nestjs/swagger";

export class Curve {
  // show the curve at the top or the bottom
  @ApiModelProperty({ required: false })
  public decorCurveVerticalAlignment?: "top" | "bottom";

  // show the curve on the left or the right
  @ApiModelProperty({ required: false })
  public decorCurveHorizontalAlignment?: "left" | "right";

  // inside the curve, pattern or color
  @ApiModelProperty({ required: false })
  public curveBackground: string;
}
