import { ItemOverviewModule, ItemOverviewStateModule } from 'src/model/item-overview-module';
import { GenerateRecipesCardList } from './news-overview-generator';

export const getCards = (skip: number, take: number, filter?: string): ItemOverviewStateModule => {
  const TOTAL_ITEMS = 32;
  const paginatedList = [];
  if (skip > TOTAL_ITEMS) {
    return null;
  }
  const cardList = GenerateRecipesCardList(TOTAL_ITEMS);
  const finalPosition = skip + take;
  let totalItems = TOTAL_ITEMS;
  if (filter) {
    totalItems = 0;
    filter = filter.toUpperCase();
    const filteredList = [];
    for (let i = 0; i < TOTAL_ITEMS; i++) {
      if (cardList[i].title.toUpperCase().includes(filter)) {
        filteredList.push(cardList[i]);
      }
    }
    totalItems = filteredList.length;
    for (let i = skip; i < finalPosition; i++) {
      if (filteredList[i] != undefined) {
        paginatedList.push(filteredList[i]);
      }
    }
  } else {
    totalItems = cardList.length;
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
