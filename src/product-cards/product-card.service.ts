import { Injectable } from "@nestjs/common";
import { ProductCardsFilterReturn } from "./product-card.model";
import uuid = require("uuid");
import { generateDummyProductOverviewModule } from "src/model/product-overview";
@Injectable()
export class ProductCardService {
  private GenerateCardList(length: number) {
    let cardList = [];
    for (let i = 0; i <= length; i++) {
      cardList.push(generateDummyProductOverviewModule());
    }
    return cardList;
  }

  public getCards(filter?: string): ProductCardsFilterReturn {
    const TOTAL_ITEMS = 1;
    const cardList = this.GenerateCardList(TOTAL_ITEMS);

    let totalItems = TOTAL_ITEMS;
    if (filter) {
      totalItems = 0;
      filter = filter.toUpperCase();
      let filteredList = [];
      for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (cardList[i].title.toUpperCase().includes(filter)) {
          filteredList.push(cardList[i]);
        }
      }

      return {
        productOverviewCard: cardList,
        id: "0",
        bottomMargin: "0",
        topMargin: "0",
        name: ""
      };
    } else {
      return {
        productOverviewCard: cardList,
        id: "0",
        bottomMargin: "0",
        topMargin: "0",
        name: ""
      };
    }
  }
}
