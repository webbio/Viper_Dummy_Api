import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { buttonFooter } from './buttonFooter';

export class RelatedProduct {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty({ required: false })
  public amount?: string;
  @ApiModelProperty()
  public picture: string;
  @ApiModelProperty()
  public URL: string;
}
