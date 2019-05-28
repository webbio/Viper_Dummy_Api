import { Injectable } from '@nestjs/common';
import { generateDummyProductCard, ProductCard } from 'src/model/product-card';
import {
  CategoryCard,
  generateDummyCategoryCard,
} from 'src/model/category-card';

@Injectable()
export class ProductLineService {
  productCardList: ProductCard[];
  categoryCardList: CategoryCard[];

  public generateData(dataLength: number): ProductCard[] {
    let data = [];
    data = generateDummyProductCard();
    for (let i = 0; i < dataLength; i++) {
      data.push({
        link: '/',
        title: 'Test' + i,
        category: 'Noedels',
        image:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
        content: 'Content',
        subCategory: 'Glutenvrij',
      });
    }
    return data;
  }

  public getProductsWithPagination(
    category: string,
    filter: string[],
    skip: number,
    take: number,
  ) {
    const TOTAL_ITEMS = 202;
    const paginatedList = [];
    if (skip > TOTAL_ITEMS) {
      return null;
    }

    const productList = this.generateData(TOTAL_ITEMS);
    const finalPosition: number = skip + take;
    let totalItems = TOTAL_ITEMS;
    let filteredProductList: ProductCard[] = [];

    if (category) {
      totalItems = 0;
      const filteredList = [];
      for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (productList[i].category.toUpperCase() === category.toUpperCase()) {
          filteredList.push(productList[i]);
        }
      }
      if (filter) {
        filteredList.forEach(
          product =>
            filter.includes(product.subCategory) &&
            filteredProductList.push(product),
        );
      } else {
        filteredProductList = filteredList;
      }
      totalItems = filteredProductList.length;

      for (let i = skip; i < finalPosition; i++) {
        if (filteredProductList[i] !== undefined) {
          paginatedList.push(filteredProductList[i]);
        }
      }
    } else {
      totalItems = productList.length;
      for (let i = skip; i < finalPosition; i++) {
        if (productList[i] !== undefined) {
          paginatedList.push(productList[i]);
        }
      }
    }

    return {
      totalItems,
      productCardList: paginatedList,
    };
  }

  public searchProducts(filter: string) {
    const TOTAL_ITEMS = 202;

    this.productCardList = this.generateData(TOTAL_ITEMS);

    const filteredList: ProductCard[] = [];

    if (filter) {
      this.productCardList.forEach(
        productCard =>
          productCard.title.toUpperCase().includes(filter.toUpperCase()) &&
          filteredList.push(productCard),
      );
      return {
        productCardList: filteredList,
      };
    }
  }

  public getCategoryList(categories: string[], products: string[]) {
    this.categoryCardList = generateDummyCategoryCard();
    this.productCardList = generateDummyProductCard();
    const filteredCategoryList: CategoryCard[] = [];
    const productList: ProductCard[] = [];
    let filteredProductList: ProductCard[] = [];

    if (categories) {
      this.categoryCardList.forEach(
        categoryCard =>
          categories.includes(categoryCard.category) &&
          filteredCategoryList.push(categoryCard),
      );

      filteredCategoryList.forEach(filteredCategory =>
        this.productCardList.forEach(
          product =>
            filteredCategory.category === product.category &&
            productList.push(product),
        ),
      );
      if (products) {
        productList.forEach(
          product =>
            products.includes(product.subCategory) &&
            filteredProductList.push(product),
        );
      } else {
        filteredProductList = productList;
      }
      return {
        categoryCardList: filteredCategoryList,
        productCardList: filteredProductList,
      };
    }
  }

  public getProducts(products: string[]) {
    this.productCardList = generateDummyProductCard();
    const filteredProductList: ProductCard[] = [];
    if (products) {
      this.productCardList.forEach(
        productCard =>
          products.includes(productCard.subCategory) &&
          filteredProductList.push(productCard),
      );

      return {
        productCardList: filteredProductList,
      };
    }
  }
}