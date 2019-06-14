import { ApiModelProperty } from '@nestjs/swagger';
import { Placeholder } from './placeholder-fields';

export class ContactForm {
  @ApiModelProperty()
  public email?: string;
  @ApiModelProperty()
  public name?: string;
  @ApiModelProperty()
  public privacyText?: string;
  @ApiModelProperty()
  public privacyLink?: string;
  @ApiModelProperty({ type: Placeholder })
  public placeholderField?: Placeholder;
}
