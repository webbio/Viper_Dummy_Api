import { ApiModelProperty } from '@nestjs/swagger';

export class ourTeamCards {
  @ApiModelProperty()
  public link?: string;
  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public image?: string;
  @ApiModelProperty()
  public position?: string;
  @ApiModelProperty()
  public social?: boolean;
}
