import { Injectable } from "@nestjs/common";
import { ProductCardsFilter } from "./product-card.model";
import uuid = require("uuid");
import { generateDummySidebarModule } from "src/model/sidebar-module";
import { generateDummyProductCard, ProductCard } from "src/model/product-card";
import {
  generateDummyCategoryCard,
  CategoryCard
} from "src/model/category-card";
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
  sidebar: ProductLineFilterModule;
  productCardList: ProductCard[];
  categoryCardList: CategoryCard[];
  newFilter: string[] = [""];

  public getProducts(filter: string) {
    this.sidebar = generateProductLineFilterModule();
    this.productCardList = generateDummyProductCard();
    this.categoryCardList = generateDummyCategoryCard();
    let filteredList: CategoryCard[] = [];
    if (filter) {
      // console.log("filter: " + filter);
      if (!this.newFilter.includes(filter)) {
        this.newFilter.push(filter);
        // console.log(this.newFilter);
      }
    }
    if (this.newFilter.length > 1) {
      this.newFilter.map(newFilter =>
        this.categoryCardList.map(
          categoryCard =>
            categoryCard.category === newFilter &&
            filteredList.push(categoryCard)
        )
      );
      // console.log(filteredList);
      return {
        categoryCard: filteredList,
        productCard: this.productCardList,
        sidebar: this.sidebar
      };
    } else {
      return {
        categoryCard: this.categoryCardList,
        productCard: this.productCardList,
        sidebar: this.sidebar
      };
    }
  }

  public removeFilter(filter: string) {
    if (filter) {
      for (let i = 0; this.newFilter.length; i++) {
        if (this.newFilter[i] === filter) {
          this.newFilter[i] == ""; //.slice(i, 1);
          console.log("afters: " + this.newFilter);
        }
      }
    }
  }
}
