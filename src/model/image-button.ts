import { ApiModelProperty, ApiModel } from "swagger-express-ts";
import { ButtonType } from "../enums/button-type";

@ApiModel({
  description: "Image Button"
})
export class ImageButton {
  @ApiModelProperty({
    description: "Which type of button is it",
    example: ["Large", "Medium"],
    required: true
  })
  public buttonType: ButtonType;

  @ApiModelProperty({ description: "Text inside the button", required: true })
  public content: string;

  @ApiModelProperty({ description: "Image url in the button", required: true })
  public imageUrl: string;

  @ApiModelProperty({ description: "Route that the button links to", required: true })
  public route: string;
}
