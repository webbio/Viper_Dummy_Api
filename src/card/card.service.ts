import { Injectable } from '@nestjs/common';
import { CardPaginationReturn } from './card.model';
import uuid = require('uuid');
import { GenerateRecipesCardList } from './card-generator';
@Injectable()
export class CardService {
  // private GenerateCardList(length: number, take: number, ) {
  //   const cardList = [];
  //   for (let i = 0; i <= length; i++) {
  //     cardList.push({
  //       buttonText: 'Lees meer',
  //       category: 'Recept',
  //       cardLabels: [
  //         {
  //           title: 'First Item',
  //           icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/type.svg',
  //         },
  //         {
  //           title: 'Second Item',
  //           icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/type.svg',
  //         },
  //       ],
  //       picture: {
  //         url: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.1ebed0b8.jpg',
  //         alt: 'item',
  //       },
  //       title: `Title #${i}`,
  //       URL: '/',
  //     });
  //   }
  //   return cardList;
  // }

  public getCards(skip: number, take: number, filter?: string): CardPaginationReturn {
    const TOTAL_ITEMS = 202;
    const paginatedList = [];
    if (skip > TOTAL_ITEMS) { return null; }
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
        if (filteredList[i] != undefined) { paginatedList.push(filteredList[i]); }
      }
    } else {
      totalItems = cardList.length;
      for (let i = skip; i < finalPosition; i++) { if (cardList[i] != undefined) { paginatedList.push(cardList[i]); } }
    }
    return {
      totalItems,
      cards: paginatedList,
    };
  }
}
