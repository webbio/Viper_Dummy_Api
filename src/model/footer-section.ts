import { ApiModelProperty } from '@nestjs/swagger';
import { Link } from './link';

export class footerSection {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty({ type: [Link] })
  public links: Link[];
}
