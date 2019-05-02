import { Injectable } from "@nestjs/common";
import { ProductCardsFilterReturn } from "./product-card.model";
import uuid = require("uuid");
import { generateDummyProductOverviewModule } from "src/model/product-overview";
import { generateDummySidebarModule } from "src/model/sidebar-module";
@Injectable()
export class ProductCardService {
  public getProducts(filter: string[]) {
    let productCardList = [];

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
    let filteredList = [];
    filter = [""];
    filter &&
      filter.map(categories =>
        categories
          ? (productCardList.map(
              list =>
                list.category.toUpperCase().includes(categories) &&
                filteredList.push(list)
            ),
            {
              productOverviewCard: filteredList,
              id: "0",
              bottomMargin: "0",
              topMargin: "0",
              name: ""
            })
          : {
              productOverviewCard: productCardList,
              id: "0",
              bottomMargin: "0",
              topMargin: "0",
              name: ""
            }
      );
  }
}
