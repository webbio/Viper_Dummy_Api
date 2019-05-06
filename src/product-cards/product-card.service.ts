import { Injectable } from "@nestjs/common";
import { ProductCardsFilter } from "./product-card.model";
import uuid = require("uuid");
import { generateDummySidebarModule } from "src/model/sidebar-module";
import { generateDummyProductCard } from "src/model/product-card";
import { generateDummyCategoryCard } from "src/model/categoryCard";
import {
  generateDummyProductOverview,
  ProductOverview
} from "src/model/product-overview";
@Injectable()
export class ProductCardService {
  filteredList: string[] = [];
  cardList: ProductOverview;

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
    if (filter) {
      for (let y = 0; filter.length; y++) {
        const cat = filter[y].toUpperCase();
        this.checkCategoryExists(filter[y]);
        for (let i = 0; i < this.cardList.categoryCards.length; i++) {
          if (
            this.cardList[i].categoryCards.category.toUpperCase().includes(cat)
          ) {
            this.filteredList.push(this.cardList[i]);
          }
        }

        return {
          cardList: this.filteredList
        };
      }
    } else if (!filter) {
      return {
        cardList: this.cardList
      };
    }
  }
  /*
  public getSidebarData() {
    return {
      id: "0",
      bottomMargin: "0",
      topMargin: "0",
      name: ""
    };
  }*/
}
