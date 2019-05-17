import { Injectable } from '@nestjs/common';
import { generateDummyProductCard, ProductCard } from 'src/model/product-card';

@Injectable()
export class ProductLineService {
  productCardList: ProductCard[];

  public generateData(dataLength: number): ProductCard[] {
    let data = [];
    data = generateDummyProductCard();
    for (let i = 0; i < dataLength; i++) {
      data.push({
        link: '/',
        title: 'Test' + i,
        category: 'Noedels',
        image:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.png',
        content: 'Content',
        subCategory: 'Glutenvrij',
      });
    }
    return data;
  }

  public getProducts(category: string, skip: number, take: number) {
    const TOTAL_ITEMS = 202;
    const paginatedList = [];
    if (skip > TOTAL_ITEMS) {
      return null;
    }
    const productList = this.generateData(TOTAL_ITEMS);
    const finalPosition = skip + take;
    let totalItems = TOTAL_ITEMS;
    if (category) {
      totalItems = 0;
      const filteredList = [];
      for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (productList[i].category.toUpperCase() === category.toUpperCase()) {
          filteredList.push(productList[i]);
        }
      }
      totalItems = filteredList.length;
      for (let i = skip; i < finalPosition; i++) {
        if (filteredList[i] !== undefined) {
          paginatedList.push(filteredList[i]);
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
    this.productCardList = generateDummyProductCard();
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
}
