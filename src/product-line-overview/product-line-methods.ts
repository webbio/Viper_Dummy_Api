import { ProductLineOverviewModule, ProductLineOverviewCard } from './product-line-card';
import { generateProductLineCardList, diets } from './product-line-generator';
import { categories } from 'src/news-overview/news-overview-generator';
import uuid = require('uuid');

export const getProductCards = (filter?: string, category?: string, diet?: string): ProductLineOverviewModule => {
  const TOTAL_ITEMS = 8;
  let cardList = generateProductLineCardList(TOTAL_ITEMS);

  if (category) {
    const categoryUpperCase = category.toUpperCase();
    cardList = cardList.filter(
      (item: ProductLineOverviewCard) => item.categoryDetail.toUpperCase() == categoryUpperCase,
    );
  }

  if (diet) {
    const dietUpperCase = diet.toUpperCase();
    cardList = cardList.filter((item: ProductLineOverviewCard) => item.diet.toUpperCase() == dietUpperCase);
  }

  if (filter) {
    filter = filter.toUpperCase();
    cardList = cardList.filter(
      item => item.title.toUpperCase().includes(filter) || item.content.toUpperCase().includes(filter),
    );
  }
  return {
    productsLine: cardList,
    categories,
    diets,
    id: uuid(),
    bottomMargin: '0px',
    topMargin: '0px',
    name: 'ProductLineStoryOverviewModule',
  };
};
