import { ApiModelProperty } from "@nestjs/swagger";
import { Curve } from "./curve";
import { Background } from "./background";
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
  public topPadding?: string;

  @ApiModelProperty({ required: false })
  public bottomPadding?: string;

  // background, can be set as a pattern or color
  @ApiModelProperty({ required: false })
  public background?: Background;

  @ApiModelProperty({ required: false })
  public curve?: Curve;
}
