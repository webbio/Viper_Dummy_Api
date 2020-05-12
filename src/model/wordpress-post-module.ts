import { ApiModelProperty } from "@nestjs/swagger";
import { Curve } from "./curve";
import { Background } from "./background";

export class Padding {
  @ApiModelProperty()
  public mobilePadding: number;
  @ApiModelProperty()
  public desktopPadding: number;
}
export class WordPressPostModule {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public name: string;

  @ApiModelProperty()
  public topMargin: string;

  @ApiModelProperty()
  public bottomMargin: string;

  // background, can be set as a pattern or color
  @ApiModelProperty({ required: false })
  public background?: Background;

  @ApiModelProperty({ required: false })
  public curve?: Curve;

  // padding must be one of the following object. Each object identifies a desktop and mobile size, SMALL, MEDIUM, LARGE
  @ApiModelProperty({ required: false, type: Padding })
  public topPadding?: Padding;
  // padding must be one of the following object. Each object identifies a desktop and mobile size, SMALL, MEDIUM, LARGE
  @ApiModelProperty({ required: false, type: Padding })
  public bottomPadding?: Padding;
}

export const paddingMobile = {
  mobilePaddingSmall: 24,
  mobilePaddingMedium: 32,
  mobilePaddingLarge: 48,
  mobilePaddingXLarge: 64,
};

export const paddingDesktop = {
  desktopPaddingSmall: 72,
  desktopPaddingMedium: 96,
  desktopPaddingLarge: 120,
  desktopPaddingXLarge: 144,
};
