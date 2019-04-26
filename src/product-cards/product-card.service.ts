import { Injectable } from "@nestjs/common";
import { ProductCardsFilterReturn } from "./product-card.model";
import uuid = require("uuid");
import { generateDummyProductOverviewModule } from "src/model/product-overview";
@Injectable()
export class ProductCardService {
  private GenerateCardList(length: number) {
    let cardList = [];
    for (let i = 0; i <= length; i++) {}
    return cardList;
  }

  public getCards(filter?: string): ProductCardsFilterReturn {
    const TOTAL_ITEMS = 1;
    // const cardList = this.GenerateCardList(TOTAL_ITEMS);
    let cardList = [];

    cardList.push(
      {
        link: "/",
        title: "Noedels",
        category: "Noedels",
        image: "",
        button: { title: "Bekijk alle 12" },
        cardVariant: "card--category",
        modifyClass: "card--modify"
      },
      {
        link: "/",
        title: "Zeewieren",
        category: "Zeewieren",
        image: "",
        button: { title: "Bekijk alle 12" },
        cardVariant: "card--category",
        modifyClass: "card--modify"
      },
      {
        link: "/",
        title: "Paddenstolen en seitan",
        category: "Paddenstolen en seitan",
        image: "",
        button: { title: "Bekijk alle 12" },
        cardVariant: "card--category",
        modifyClass: "card--modify"
      },

      {
        link: "/",
        title: "Title",
        category: "Noedels",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.png",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },
      {
        link: "/",
        title: "Title",
        category: "Noedels",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },
      {
        link: "/",
        title: "Title",
        category: "Noedels",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },
      {
        link: "/",
        title: "Title",
        category: "Noedels",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },

      {
        link: "/",
        title: "Title",
        category: "Zeewieren",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/1.jpg",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },
      {
        link: "/",
        title: "Title",
        category: "Zeewieren",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/2.jpg",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },
      {
        link: "/",
        title: "Title",
        category: "Zeewieren",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/3.jpg",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },
      {
        link: "/",
        title: "Title",
        category: "Zeewieren",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/4.jpg",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },

      {
        link: "/",
        title: "Title",
        category: "Paddenstolen en seitan",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/1.png",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },
      {
        link: "/",
        title: "Title",
        category: "Paddenstolen en seitan",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/2.jpg",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      },
      {
        link: "/",
        title: "Title",
        category: "Paddenstolen en seitan",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/3.jpg",
        content: "Content",
        cardVariant: "card--product",
        modifyClass: ""
      }
    );

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
