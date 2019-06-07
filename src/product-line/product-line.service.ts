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
    search: string,
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
    let filteredProductListWithSearch: ProductCard[] = [];

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
      if (search) {
        filteredProductList.forEach(
          productCard =>
            productCard.title.toUpperCase().includes(search.toUpperCase()) &&
            filteredProductListWithSearch.push(productCard),
        );
      } else {
        filteredProductListWithSearch = filteredProductList;
      }
      totalItems = filteredProductListWithSearch.length;

      for (let i = skip; i < finalPosition; i++) {
        if (filteredProductListWithSearch[i] !== undefined) {
          paginatedList.push(filteredProductListWithSearch[i]);
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

  public getCategoryList(
    categories: string[],
    products: string[],
    search: string,
  ) {
    this.categoryCardList = generateDummyCategoryCard();
    this.productCardList = generateDummyProductCard();
    const filteredCategoryList: CategoryCard[] = [];
    const productList: ProductCard[] = [];
    let filteredProductList: ProductCard[] = [];
    let filteredProductListWithSearch: ProductCard[] = [];
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
    } else {
      filteredProductList = this.productCardList;
    }

    if (search) {
      filteredProductList.forEach(
        productCard =>
          productCard.title.toUpperCase().includes(search.toUpperCase()) &&
          filteredProductListWithSearch.push(productCard),
      );
    } else {
      filteredProductListWithSearch = filteredProductList;
    }
    return {
      categoryCardList: filteredCategoryList,
      productCardList: filteredProductListWithSearch,
    };
  }

  public getProducts(products: string[], search: string) {
    this.productCardList = generateDummyProductCard();
    let filteredProductList: ProductCard[] = [];
    let filteredProductListWithSearch: ProductCard[] = [];
    if (products) {
      this.productCardList.forEach(
        productCard =>
          products.includes(productCard.subCategory) &&
          filteredProductList.push(productCard),
      );
    } else {
      filteredProductList = this.productCardList;
    }
    if (search) {
      filteredProductList.forEach(
        productCard =>
          productCard.title.toUpperCase().includes(search.toUpperCase()) &&
          filteredProductListWithSearch.push(productCard),
      );
    } else {
      filteredProductListWithSearch = filteredProductList;
    }
    return {
      productCardList: filteredProductListWithSearch,
    };
  }
}
