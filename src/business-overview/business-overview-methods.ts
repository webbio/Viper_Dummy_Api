import { ItemOverviewModule, ItemOverviewStateModule } from 'src/model/item-overview-module';
import { CardModel } from 'src/model/card-model';
import {
  generateProductLineJapanCategories,
  BusinessOverviewCategory,
  generateProductLineNoedelsProduct,
  BusinessOverviewProduct,
  BusinessOverviewProductsState,
  BusinessOverviewCategoriesState,

} from 'src/model/business-overview-module';

export const getCardsByProductLine = (
  skip: number,
  category: string,
  filter?: string,
): BusinessOverviewProductsState => {
  const TOTAL_ITEMS = 32;
  const take = 9;
  const paginatedList = [];
  if (skip > TOTAL_ITEMS) {
    return null;
  }
  let cardList = generateProductLineNoedelsProduct(TOTAL_ITEMS);

  let mixerKey = 0;
  category = category.toUpperCase();
  switch (category) {
    case 'NOEDELS':
      mixerKey = 0;
      break
    case 'ZEEWIEREN':
      mixerKey = 1;
      cardList = cardList.slice(0, 2)
      break
    case 'PADDENSTOELEN EN SEITAN':
      mixerKey = 2;
      cardList = cardList.slice(0, 13)
      break
    case 'RIJST, BONEM, ZADEN':
      mixerKey = 3;
      cardList = cardList.slice(0, 28)
      break
    case 'BIND- EN ZOETMIDDELEN':
      mixerKey = 4;
      cardList = cardList.slice(0, 6)
      break
    case 'SOJASAUZEN':
      mixerKey = 5;
      cardList = cardList.slice(0, 12)
      break
    case 'MISO':
      mixerKey = 8;
      cardList = cardList.slice(0, 12)
      break
    case 'UME(BOSHI)':
      mixerKey = 10;
      break
    case 'SMAAKMAKERS':
      mixerKey = 6;
      cardList = cardList.slice(0,  5)
      break
    case 'CRACKERS':
      mixerKey = 7;
      cardList = cardList.slice(0,  5)
      break
    case 'NON-FOOD':
      mixerKey = 9;
      cardList = cardList.slice(0, 5)
      break
    case 'ALLES VOOR SUSHI':
      mixerKey = 6;
      cardList = cardList.slice(0, 12)
      break
    case 'Japan macrobiotisch':
      mixerKey = 1;
      break
    case 'Kokos':
      mixerKey = 5;
      cardList = cardList.slice(0, 35)
      break
    case 'Broodvarianten':
      cardList = cardList.slice(0, 23)
      mixerKey = 7;
      break
    case 'Ahornsiroop':
      mixerKey = 8;
      cardList = cardList.slice(0, 15)
      break
    case 'Chips':
      mixerKey = 3;
      cardList = cardList.slice(0, 25)
      break
    case 'Wafaels':
      mixerKey = 6;
      cardList = cardList.slice(0, 35)
      break
    case 'Choco-treats':
      mixerKey = 5;
      break
    case 'Conserven':
      cardList = cardList.slice(0, 25)
      mixerKey = 7;
      break
  }

  cardList = mixerArray(cardList, mixerKey);

  const finalPosition = skip + take;
  let filteredList = [];
  let totalItems = filteredList.length;

  if (filter) {
    totalItems = 0;
    filter = filter.toUpperCase();
    filteredList = cardList.filter((item: BusinessOverviewProduct) => item.title.toUpperCase().includes(filter));
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
  if (paginatedList.length === 0) {
    totalItems = 0;
  }
  console.log(totalItems)
  const toReturn: BusinessOverviewProductsState = {
    paginatedProductList: paginatedList,
    totalProducts: totalItems,
  };
  return toReturn;
};

const mixerArray = (array: any, key: number) => {
  const firstSlice = array.slice(key, array.length);
  const lastSlice = array.slice(0, key);
  return [...firstSlice, ...lastSlice];
};

export const getCardsByCategory = (
  skip: number,
  category: string,
  filter?: string,
): BusinessOverviewCategoriesState => {
  const TOTAL_ITEMS = 84;
  const take = 12;
  const paginatedList = [];
  if (skip > TOTAL_ITEMS) {
    return null;
  }
  let cardList = generateProductLineJapanCategories(TOTAL_ITEMS);
  const finalPosition = skip + take;
  let filteredList: BusinessOverviewCategory[] = [];
  let totalItems = filteredList.length;

  let mixerKey = 0;
  switch(category){
    case 'Latte': 
      mixerKey=0; 
      break
    case 'Vegan cakes': 
      mixerKey=1; 
      cardList = cardList.slice(0,2)
      break
    case 'Nottenpasta': 
      mixerKey=2; 
      cardList = cardList.slice(0,13)
      break
    case 'Raw Superfood': 
      mixerKey=3; 
      cardList = cardList.slice(0, 50)
      break
    case 'Meditarrane keuken': 
      mixerKey=4; 
      cardList = cardList.slice(0, 6)
      break
    case 'Japan moderne keuken': 
      mixerKey=5; 
      cardList = cardList.slice(0, 45)
      break
    case 'Drop': 
      mixerKey=8; 
      cardList = cardList.slice(0, 12)
      break
    case 'Noten, zaden en zuivruchten': 
      mixerKey=10; 
      break
    case 'Muesli en cereals': 
      mixerKey=6; 
      cardList = cardList.slice(0, 65)
      break
    case 'Granen en rijst': 
      mixerKey=7; 
      cardList = cardList.slice(0, 75)
      break
    case 'Melen': 
      mixerKey=9; 
      cardList = cardList.slice(0, 5)
      break
    case 'Peulvruchten': 
      mixerKey=6; 
      cardList = cardList.slice(0, 12)
      break
    case 'Japan macrobiotisch': 
      mixerKey=1; 
      break
    case 'Kokos': 
      mixerKey=5; 
      cardList = cardList.slice(0, 45)
      break
    case 'Broodvarianten':
      cardList = cardList.slice(0, 43) 
      mixerKey=7; 
      break
    case 'Ahornsiroop': 
      mixerKey=8; 
      cardList = cardList.slice(0, 5)
      break
    case 'Chips': 
      mixerKey=3; 
      cardList = cardList.slice(0, 5)
      break
    case 'Wafaels':
      mixerKey = 6;
      cardList = cardList.slice(0, 5)
      break
    case 'Choco-treats':
      mixerKey = 5;
      break
    case 'Conserven':
      cardList = cardList.slice(0, 5)
      mixerKey = 7;
      break
  }
  
  cardList = mixerArray(cardList, mixerKey);
  if (filter) {
    totalItems = 0;
    filter = filter.toUpperCase();
    filteredList = cardList.filter((item: BusinessOverviewCategory) => item.title.toUpperCase().includes(filter));
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
  if (paginatedList.length === 0) {
    totalItems = 0;
  }
  const toReturn: BusinessOverviewCategoriesState = {
    totalCategories: totalItems,
    paginatedCategories: paginatedList,
  };
  return toReturn;
};
