import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { buttonFooter } from './buttonFooter';

export class HowToModel {
  @ApiModelProperty({ type: [String] })
  public steps: String[];
  @ApiModelProperty()
  public extraText: string;
}
