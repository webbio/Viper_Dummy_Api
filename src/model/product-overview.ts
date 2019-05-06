import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { ProductCard, generateDummyProductCard } from "./product-card";
import { CategoryCard, generateDummyCategoryCard } from "./categoryCard";

export class ProductOverview {
  @ApiModelProperty({ type: [ProductCard] })
  public productCards: ProductCard[];

  @ApiModelProperty({ type: [CategoryCard] })
  public categoryCards: CategoryCard[];
}

export const generateDummyProductOverview = (): ProductOverview => {
  return {
    productCards: generateDummyProductCard(),
    categoryCards: generateDummyCategoryCard()
  };
};
