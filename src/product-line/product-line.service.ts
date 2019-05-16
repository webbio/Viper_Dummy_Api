import { Injectable } from "@nestjs/common";

import { generateDummyProductCard, ProductCard } from "src/model/product-card";
import {
  generateDummyCategoryCard,
  CategoryCard
} from "src/model/category-card";
import {
  ProductLineFilter,
  generateProductLineFilter
} from "src/model/product-line-filter";

@Injectable()
export class ProductLineService {
  productCardList: ProductCard[];
  categoryCardList: CategoryCard[];
  newCategoryFilter: string[] = [""];
  newProductFilter: string[] = [""];
  sidebar: ProductLineFilter;
  /*
  public getCategories(filter: string) {
    this.categoryCardList = generateDummyCategoryCard();

    let filteredList: CategoryCard[] = [];
    if (filter) {
      if (!this.newCategoryFilter.includes(filter)) {
        this.newCategoryFilter.push(filter);
      }
    }
    if (this.newCategoryFilter.length > 1) {
      this.newCategoryFilter.forEach(newFilter =>
        this.categoryCardList.forEach(
          categoryCard =>
            categoryCard.category === newFilter &&
            filteredList.push(categoryCard)
        )
      );
      return {
        categoryCard: filteredList
      };
    }
  }
*/
  public getProducts(category: string) {
    console.log("salut");
    this.productCardList = generateDummyProductCard();
    this.sidebar = generateProductLineFilter();
    let filteredList: ProductCard[] = [];

    if (category) {
      this.productCardList.forEach(
        productCard =>
          productCard.category.toUpperCase() === category.toUpperCase() &&
          filteredList.push(productCard)
      );
      // console.log(filteredList);
      return {
        productCardList: filteredList,
        filter: this.sidebar
      };
    }
  }

  public searchProducts(filter: string) {
    this.productCardList = generateDummyProductCard();
    let filteredList: ProductCard[] = [];

    if (filter) {
      this.productCardList.forEach(
        productCard =>
          productCard.subCategory
            .toUpperCase()
            .includes(filter.toUpperCase()) && filteredList.push(productCard)
      );
      // console.log(filteredList);
      return {
        productCardList: filteredList
      };
    }
  }
}
