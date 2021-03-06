import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { buttonFooter } from './buttonFooter';

export class IngredientModel {
  @ApiModelProperty()
  public name: string;
  @ApiModelProperty()
  public amount: string;
}
