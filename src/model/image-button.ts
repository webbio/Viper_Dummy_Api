import { ButtonType } from '../enums/button-type';
import { ApiModelProperty } from '@nestjs/swagger';

export class ImageButton {
  @ApiModelProperty()
  public buttonType: ButtonType;

  @ApiModelProperty()
  public content: string;

  @ApiModelProperty()
  public imageUrl: string;

  @ApiModelProperty()
  public route: string;
}
