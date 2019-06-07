import {
  WordPressPostModule,
  paddingDesktop,
  paddingMobile,
} from './wordpress-post-module';
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

  @ApiModelProperty({ type: [String] })
  public categories: string[];
}

export const generateDummyItemOverviewData = (): ItemOverviewModule => {
  return {
    name: 'RecipeOverviewModule',
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    topMargin: '0px',
    bottomMargin: '0px',
    categories: [
      'Noedels',
      'Zeewieren',
      'Paddenstoelen en seitan',
      'Veganistischs',
      'Sojasauzen',
      'Rijst',
    ],
    background: {
      backgroundColour: '#F5FAFA',
    },
    state: getCards(0, 9),
    id: uuid(),
  };
};
