import { Injectable } from "@nestjs/common";

import { generateDummyProductCard, ProductCard } from "src/model/product-card";
import {
  generateDummyCategoryCard,
  CategoryCard
} from "src/model/category-card";

import {
  generateProductLineFilterModule,
  ProductLineFilterModule
} from "src/model/product-line-filter-module";
@Injectable()
export class ProductCardService {
  sidebar: ProductLineFilterModule;
  productCardList: ProductCard[];
  categoryCardList: CategoryCard[];
  newCategoryFilter: string[] = [""];
  newProductFilter: string[] = [""];

  public getCategories(filter: string) {
    this.sidebar = generateProductLineFilterModule();
    this.productCardList = generateDummyProductCard();
    this.categoryCardList = generateDummyCategoryCard();

    let filteredList: CategoryCard[] = [];
    if (filter) {
      this.removeFilter(filter);
      if (!this.newCategoryFilter.includes(filter)) {
        this.newCategoryFilter.push(filter);
      }
    }
    if (this.newCategoryFilter.length > 1) {
      this.newCategoryFilter.map(newFilter =>
        this.categoryCardList.map(
          categoryCard =>
            categoryCard.category === newFilter &&
            filteredList.push(categoryCard)
        )
      );
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

  public getProducts(filter: string) {
    this.sidebar = generateProductLineFilterModule();
    this.productCardList = generateDummyProductCard();
    let filteredList: ProductCard[] = [];
    if (filter) {
      if (!this.newProductFilter.includes(filter)) {
        this.newProductFilter.push(filter);
      }

      if (this.newProductFilter.length > 1) {
        this.newProductFilter.map(newFilter =>
          this.productCardList.map(
            productCard =>
              productCard.subCategory === newFilter &&
              filteredList.push(productCard)
          )
        );
        return {
          productCard: filteredList,
          sidebar: this.sidebar
        };
      }
    } else {
      return {
        productCard: this.productCardList,
        sidebar: this.sidebar
      };
    }
  }

  public removeFilter(filter: string) {
    if (filter === "clearProductfilter") {
      this.newProductFilter = [""];
    } else if (filter === "clearCategoryfilter") {
      this.newCategoryFilter = [""];
    }
    return true;
  }
}
