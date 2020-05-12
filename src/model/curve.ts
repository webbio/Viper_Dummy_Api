import { ApiModelProperty } from "@nestjs/swagger";
import { Background } from "./background";
export class Curve {
  // show the curve at the top or the bottom
  @ApiModelProperty({ required: false })
  public verticalAlignment?: "top" | "bottom" | "middle";

  // show the curve on the left or the right
  @ApiModelProperty({ required: false })
  public horizontalAlignment?: "left" | "right";

  // inside the curve, pattern or color
  @ApiModelProperty({ required: false })
  public background?: Background;
}
