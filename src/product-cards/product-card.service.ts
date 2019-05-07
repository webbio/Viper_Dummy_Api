import { Injectable } from "@nestjs/common";
import { ProductCardsFilter } from "./product-card.model";
import uuid = require("uuid");
import { generateDummySidebarModule } from "src/model/sidebar-module";
import { generateDummyProductCard, ProductCard } from "src/model/product-card";
import {
  generateDummyCategoryCard,
  CategoryCard
} from "src/model/categoryCard";
import {
  generateDummyProductOverview,
  ProductOverview
} from "src/model/product-overview";
import {
  generateProductLineFilterModule,
  ProductLineFilterModule
} from "src/model/product-line-filter-module";
@Injectable()
export class ProductCardService {
  filteredList: CategoryCard[] = [];
  sidebar: ProductLineFilterModule;
  productCardList: ProductCard[];
  categoryCardList: CategoryCard[];
  public checkCategoryExists(category: string) {
    //console.log(this.filteredList);
    for (let i = 0; this.filteredList.length; i++) {
      /*  if (this.filteredList[i].category === category.toUpperCase()) {
        //this.filteredList[i] = null;
      }*/
    }
  }

  public getProducts(filter: string[]) {
    this.sidebar = generateProductLineFilterModule();
    this.productCardList = generateDummyProductCard();
    this.categoryCardList = generateDummyCategoryCard();
    if (filter) {
      for (let y = 0; filter.length; y++) {
        const cat = filter[y].toUpperCase();
        /*  if (this.filteredList) {
          this.checkCategoryExists(filter[y]);
        }*/
        for (let i = 0; i < this.categoryCardList.length; i++) {
          if (this.categoryCardList[i].category.toUpperCase().includes(cat)) {
            this.filteredList.push(this.categoryCardList[i]);
          }
        }

        return {
          categoryCard: this.filteredList,
          productCard: this.productCardList,
          sidebar: this.sidebar
        };
      }
    } else if (!filter) {
      return {
        categoryCard: this.categoryCardList,
        productCard: this.productCardList,
        sidebar: this.sidebar
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
