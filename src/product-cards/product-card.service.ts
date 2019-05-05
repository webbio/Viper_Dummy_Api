import { Injectable } from "@nestjs/common";
import { ProductCardsFilterReturn } from "./product-card.model";
import uuid = require("uuid");
import { generateDummyProductOverviewModule } from "src/model/product-overview";
import { generateDummySidebarModule } from "src/model/sidebar-module";
@Injectable()
export class ProductCardService {
  filteredList: string[] = [];

  public checkCategoryExists(category: string) {
    for (let i = 0; this.filteredList.length; i++) {
      if (this.filteredList[i] !== "") {
        if (this.filteredList[i] === category.toUpperCase()) {
          this.filteredList[i] = "";
        }
      }
    }
  }

  public getProducts(filter: string[]) {
    let productCardList = [];
    console.log(this.filteredList);
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
      for (let y = 0; filter.length; y++) {
        const cat = filter[y].toUpperCase();
        this.checkCategoryExists(cat);

        for (let i = 0; i < productCardList.length; i++) {
          if (productCardList[i].category.toUpperCase().includes(cat)) {
            this.filteredList.push(productCardList[i]);
          }
        }

        return {
          productOverviewCard: this.filteredList,
          id: "0",
          bottomMargin: "0",
          topMargin: "0",
          name: ""
        };
      }
    } else if (!filter) {
      return {
        productOverviewCard: productCardList,
        id: "0",
        bottomMargin: "0",
        topMargin: "0",
        name: ""
      };
    }
  }
}
