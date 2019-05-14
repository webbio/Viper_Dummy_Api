import { WordPressPostModule } from "./wordpress-post-module";
import { ProductLineFilterModule, generateProductLineFilterModule } from "./product-line-filter-module";
import { ApiModelProperty } from "@nestjs/swagger";
import uuid = require("uuid");
import { ProductCard, generateDummyProductCard } from "./product-card";
import { CategoryCard, generateDummyCategoryCard } from "./category-card";

export class ProductLineSingleModule extends WordPressPostModule {
  @ApiModelProperty()
  public filter: ProductLineFilterModule;
  @ApiModelProperty({ type: [ProductCard] })
  public productCardList: ProductCard[];
  @ApiModelProperty({ type: [CategoryCard] })
  public categoryCardList: CategoryCard[];
  @ApiModelProperty()
  public newCategoryFilter: string[];
  @ApiModelProperty()
  public newProductFilter: string[];
}

export const generateProductLineSingleModule = (): ProductLineSingleModule => {
  return {
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "generateProductLineFilterModule",
    filter: generateProductLineFilterModule(),
    productCardList: generateDummyProductCard(),
    categoryCardList: generateDummyCategoryCard(),
    newCategoryFilter: [],
    newProductFilter: []
  };
};
