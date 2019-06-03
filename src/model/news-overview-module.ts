import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { CardModel } from './card-model';
import { getCards } from 'src/news-overview/news-overview-methods';

export class NewsOverviewStateModule {
  @ApiModelProperty({ type: [CardModel] })
  public cards: CardModel[];
  @ApiModelProperty()
  public totalItems: number;
}

export class NewsOverviewModule extends WordPressPostModule {
  @ApiModelProperty({ type: NewsOverviewStateModule })
  public state: NewsOverviewStateModule;

  @ApiModelProperty({ type: [String] })
  public categories: string[];
}

export const generateDummyNewsOverviewData = (): NewsOverviewModule => {
  return {
    name: 'NewsOverviewModule',
    bottomPadding: '12px',
    topPadding: '72px',
    topMargin: '0px',
    bottomMargin: '0px',
    categories: ['Noedels', 'Zeewieren', 'Paddenstoelen en seitan', 'Veganistischs', 'Sojasauzen', 'Rijst'],
    background: {
      backgroundColour: '#F5FAFA',
    },
    state: getCards(0, 9),
    id: uuid(),
  };
};
