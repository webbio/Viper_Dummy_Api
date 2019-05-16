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
import { generateProductOverviewSimpleModule } from "src/model/product-overview-simple-module";

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

  public generateData(dataLength: number): ProductCard[] {
    let data = [];
    data = generateDummyProductCard();
    for (let i = 0; i < dataLength; i++) {
      data.push({
        link: "/",
        title: "Title" + i,
        category: "Noedels",
        image:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.png",
        content: "Content",
        subCategory: "Glutenvrij"
      });
    }
    return data;
  }
  /*
  public getProducts(category: string) {
    this.productCardList = this.generateData(50);
    this.sidebar = generateProductLineFilter();
    let filteredList: ProductCard[] = [];
    if (category) {
      this.productCardList.forEach(
        productCard =>
          productCard.category === category && filteredList.push(productCard)
      );
      // console.log(filteredList);
      return {
        productCardList: filteredList,
        filter: this.sidebar
      };
    }
  }*/

  public getProducts(category: string, skip: number, take: number) {
    const TOTAL_ITEMS = 202;
    const paginatedList = [];
    if (skip > TOTAL_ITEMS) {
      return null;
    }
    const productList = this.generateData(TOTAL_ITEMS);
    const finalPosition = skip + take;
    if (category) {
      const filteredList = [];
      for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (productList[i].category.toUpperCase() === category.toUpperCase()) {
          filteredList.push(productList[i]);
        }
      }
      for (let i = skip; i < finalPosition; i++) {
        if (filteredList[i] != undefined) {
          paginatedList.push(filteredList[i]);
        }
      }
    } else {
      for (let i = skip; i < finalPosition; i++) {
        if (productList[i] != undefined) {
          paginatedList.push(productList[i]);
        }
      }
    }

    return {
      productCardList: paginatedList
    };
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
      return {
        productCardList: filteredList
      };
    }
  }
}
