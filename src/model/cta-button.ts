import { ApiModelProperty } from '@nestjs/swagger';

export class CTAButton {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public variant: 'primary' | 'secondary' | 'small';
  @ApiModelProperty()
  public href: string;
  @ApiModelProperty()
  public target: string;
  @ApiModelProperty()
  public type: string;
  @ApiModelProperty()
  public icon: string;
  @ApiModelProperty()
  public onClick: string;
  @ApiModelProperty()
  public location?: 'left' | 'center' | 'right';
}
