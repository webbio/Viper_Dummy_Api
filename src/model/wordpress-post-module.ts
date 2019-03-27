import { ApiModel, ApiModelProperty } from "swagger-express-ts";

export class WordPressPostModule {
  @ApiModelProperty({
    description: "Id of wordpress module",
    example: ["123456789", "12345"],
    required: true
  })
  public id: string;

  @ApiModelProperty({
    description: "Name of the module",
    example: ["123456789", "12345"],
    required: true
  })
  public name: string;

  @ApiModelProperty({
    description: "Margin for whitespace at the top of the page",
    example: ["123456789", "12345"],
    required: true
  })
  public topMargin: string;

  @ApiModelProperty({
    description: "Margin for whitespace at the bottom of the page",
    example: ["123456789", "12345"],
    required: true
  })
  public bottomMargin: string;
}
