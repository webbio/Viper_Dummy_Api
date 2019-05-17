import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { CardModel } from './card-model';

export class ItemOverviewModule extends WordPressPostModule {
  @ApiModelProperty({ type: [CardModel] })
  public cards: CardModel[];
}
