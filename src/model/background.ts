import { ApiModelProperty } from "@nestjs/swagger";

export class Background {
  @ApiModelProperty({ required: false })
  // Patterns url a user can choose from
  public backgroundPattern?: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png";
  // to distinguish if background is a picture or a colour
  @ApiModelProperty({ required: false })
  public backgroundColour?: string;
}
