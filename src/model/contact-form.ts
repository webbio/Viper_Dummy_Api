import { ApiModelProperty } from "@nestjs/swagger";

export class contactForm {
  @ApiModelProperty()
  public email?: string;
  @ApiModelProperty()
  public name?: string;
  @ApiModelProperty()
  public privacy_text?: string;
  @ApiModelProperty()
  public privacy_link?: string;
}
