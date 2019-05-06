import { WordPressPostModule } from "./wordpress-post-module";
import uuid = require("uuid");
import { FilterOptions } from "./filter-options";
import { NewsItem, generateDummyNewsModule } from "./news";
import { Recipe, generateDummyRecipesModule } from "./recipe";
import { ApiModelProperty } from "@nestjs/swagger";

export class ProductLineFilterModule extends WordPressPostModule {
  @ApiModelProperty({ type: [FilterOptions] })
  public quickFilterOptions: FilterOptions[];

  @ApiModelProperty({ type: [FilterOptions] })
  public productFilterOptions: FilterOptions[];

  @ApiModelProperty({ type: [NewsItem] })
  public relatedNewsItems: NewsItem[];

  @ApiModelProperty({ type: [Recipe] })
  public relatedRecipeItems: Recipe[];

  // todo: add products for initial state
}

export const generateProductLineFilterModule = (): ProductLineFilterModule => {
  return {
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "ProductLineFilterModule",
    quickFilterOptions: [
      {
        content: "Glutenvrij",
        value: undefined,
        id: 1
      },
      {
        content: "Vegetarisch",
        value: undefined,
        id: 2
      },
      {
        content: "Veganistisch",
        value: undefined,
        id: 3
      }
    ],
    productFilterOptions: [
      {
        content: "Zeewieren",
        value: undefined,
        id: 4
      },
      {
        content: "Paddenstoelen en seitan",
        value: undefined,
        id: 5
      },
      {
        content: "Veganistisch",
        value: undefined,
        id: 6
      },
      {
        content: "Sojasauzen",
        value: undefined,
        id: 7
      },
      {
        content: "Rijst, bonen, zaden",
        value: undefined,
        id: 8
      },
      {
        content: "Paddenstoelen en seitan",
        value: undefined,
        id: 9
      },
      {
        content: "Noedels",
        value: undefined,
        id: 10
      }
    ],
    relatedNewsItems: generateDummyNewsModule(),
    relatedRecipeItems: generateDummyRecipesModule()
  };
};
