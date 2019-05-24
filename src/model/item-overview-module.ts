import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { CardModel } from './card-model';
import { getCards } from 'src/card/card-methods';

export class ItemOverviewStateModule {
  @ApiModelProperty({ type: [CardModel] })
  public cards: CardModel[];
  @ApiModelProperty()
  public totalItems: number;
}

export class ItemOverviewModule extends WordPressPostModule {
  @ApiModelProperty({ type: ItemOverviewStateModule })
  public state: ItemOverviewStateModule;
}

export const generateDummyItemOverviewData = (): ItemOverviewModule => {
  return {
    name: 'RecipeOverviewModule',
    bottomMargin: '12px',
    topMargin: '72px',
    state: getCards(0, 9),
    id: uuid(),
  };
};
