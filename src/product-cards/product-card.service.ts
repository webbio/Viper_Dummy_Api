import { Injectable } from "@nestjs/common";
import { ProductCardsFilterReturn } from "./product-card.model";
import uuid = require("uuid");
@Injectable()
export class ProductCardService {
  private GenerateCardList(length: number) {
    let cardList = [];
    for (let i = 0; i <= length; i++) {
      cardList.push({
        link: "/",
        title: "Noedels",
        category: "Noedels",
        image: "",
        button: { title: "Bekijk alle 12" },
        cardVariant: "card--category",
        modifyClass: "card--modify",

        id: uuid(),
        name: "ItemOverviewCard",
        bottomMargin: "0px",
        topMargin: "0px"
      });
    }
    return cardList;
  }

  public getCards(filter?: string): ProductCardsFilterReturn {
    const TOTAL_ITEMS = 202;
    const cardList = this.GenerateCardList(TOTAL_ITEMS);
    let paginatedList = [];

    let totalItems = TOTAL_ITEMS;
    if (filter) {
      totalItems = 0;
      //filter = filter.toUpperCase();
      let filteredList = [];
      for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (cardList[i].title.toUpperCase().includes(filter)) {
          filteredList.push(cardList[i]);
        }
      }

      return {
        productOverviewCard: paginatedList,
        id: "0",
        bottomMargin: "0",
        topMargin: "0",
        name: ""
      };
    }
  }
}
