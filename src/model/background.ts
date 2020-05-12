import { ApiModelProperty } from "@nestjs/swagger";

export class Background {
  @ApiModelProperty({ required: false })
  // Patterns url a user can choose from
  public pattern?: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png";
  // to distinguish if background is a picture or a color
  @ApiModelProperty({ required: false })
  public color?: string;
}
