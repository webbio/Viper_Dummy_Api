import { Injectable } from "@nestjs/common";
import { ProductCardsFilterReturn } from "./product-card.model";
import uuid = require("uuid");
import { generateDummyProductOverviewModule } from "src/model/product-overview";
import { generateDummySidebarModule } from "src/model/sidebar-module";
@Injectable()
export class ProductCardService {
  /* private GenerateCardList(length: number) {
    let cardList = [];
    for (let i = 0; i <= length; i++) {}
    return cardList;
  }*/

  public getProducts(filter?: string): ProductCardsFilterReturn {
    // const cardList = this.GenerateCardList(TOTAL_ITEMS);
    let productCardList = [];
    let sidebar = [];

    //sidebar.push(generateDummySidebarModule());

    productCardList.push(
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

    if (filter) {
      filter = filter.toUpperCase();
      let filteredList = [];
      for (let i = 0; i < productCardList.length; i++) {
        if (productCardList[i].category.toUpperCase().includes(filter)) {
          filteredList.push(productCardList[i]);
        }
      }

      return {
        productOverviewCard: filteredList,
        sidebar: sidebar,
        id: "0",
        bottomMargin: "0",
        topMargin: "0",
        name: ""
      };
    } else if (!filter) {
      return {
        productOverviewCard: productCardList,
        sidebar: sidebar,
        id: "0",
        bottomMargin: "0",
        topMargin: "0",
        name: ""
      };
    }
  } /*
  private updateFilterOption(id: number): void {
    let sidebar = [];

    sidebar.push(generateDummySidebarModule());
    console.log(sidebar);
    for (let i = 0; sidebar.length; i++) {
      for (let i = 0; sidebar[i].filters.length; i++) {
        for (let i = 0; sidebar[i].filters[i].options.length; i++) {
          if (sidebar[i].filters[i].options[i].id === id) {
            sidebar[i].filters[i].options[i].isChecked = !sidebar[i].filters[i]
              .options[i].isChecked;
          }
          console.log(sidebar[i].isChecked);
        }
      }
    }
  }
  fct = this.updateFilterOption(2);*/
}
