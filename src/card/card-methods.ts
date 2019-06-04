import { ItemOverviewModule, ItemOverviewStateModule } from 'src/model/item-overview-module';
import { GenerateRecipesCardList } from './card-generator';
import { CardModel } from 'src/model/card-model';

export const getCards = (skip: number, take: number, filter?: string, category?: string): ItemOverviewStateModule => {
  const TOTAL_ITEMS = 202;
  const paginatedList = [];
  if (skip > TOTAL_ITEMS) {
    return null;
  }
  let cardList = GenerateRecipesCardList(TOTAL_ITEMS);
  const finalPosition = skip + take;
  let filteredList: CardModel[] = [];
  if (category) {
    const categoryUpperCase = category.toUpperCase();
    cardList = cardList.filter((item: CardModel) => item.categoryDetail.toUpperCase() == categoryUpperCase);
  }

  let totalItems = cardList.length;
  if (filter) {
    totalItems = 0;
    filter = filter.toUpperCase();
    filteredList = cardList.filter(item => item.title.toUpperCase().includes(filter));
    totalItems = filteredList.length;
    for (let i = skip; i < finalPosition; i++) {
      if (filteredList[i] != undefined) {
        paginatedList.push(filteredList[i]);
      }
    }
  } else {
    for (let i = skip; i < finalPosition; i++) {
      if (cardList[i] != undefined) {
        paginatedList.push(cardList[i]);
      }
    }
  }
  if (paginatedList.length === 0) { totalItems = 0; }
  const toReturn = {
    totalItems,
    cards: paginatedList,
  };
  return toReturn;
};
