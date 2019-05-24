import { ApiModelProperty } from "@nestjs/swagger";

export class ModalImage {
  @ApiModelProperty()
  public caption: string;

  @ApiModelProperty()
  public imageUrl: string;
}
