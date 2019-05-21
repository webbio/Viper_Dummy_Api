import { Injectable } from '@nestjs/common';
import uuid = require('uuid');
import { ProductLineOverviewModule } from './product-line-card';
import { generateProductLineCardList } from './product-line-generator';
@Injectable()
export class ProductLineOverviewService {
  public getProductCards(filter?: string): ProductLineOverviewModule {
    const TOTAL_ITEMS = 8;
    const cardList = generateProductLineCardList(TOTAL_ITEMS);

    if (filter) {
      filter = filter.toUpperCase();
      const filteredList = [];
      for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (cardList[i].title.toUpperCase().includes(filter) || cardList[i].content.toUpperCase().includes(filter)) {
          filteredList.push(cardList[i]);
        }
      }
      return {
        productsLine: filteredList,
        id: uuid(),
        bottomMargin: '0px',
        topMargin: '0px',
        name: 'ProductLineStoryOverviewModule',
      };
    } else {
      return {
        productsLine: cardList,
        id: uuid(),
        bottomMargin: '0px',
        topMargin: '0px',
        name: 'ProductLineStoryOverviewModule',
      };
    }
  }
}

