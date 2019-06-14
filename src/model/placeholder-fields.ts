import { ApiModelProperty } from '@nestjs/swagger';

export class Placeholder {
  @ApiModelProperty()
  public name?: string;
  @ApiModelProperty()
  public email?: string;
  @ApiModelProperty()
  public password?: string;
  @ApiModelProperty()
  public companyName?: string;
  @ApiModelProperty()
  public lastName?: string;
  @ApiModelProperty()
  public confirmPassword?: string;
  @ApiModelProperty()
  public address?: string;
  @ApiModelProperty()
  public message?: string;
  @ApiModelProperty()
  public phoneNumber?: string;
  @ApiModelProperty()
  public language?: string;
}
