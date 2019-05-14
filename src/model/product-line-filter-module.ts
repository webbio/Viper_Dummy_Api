import { FilterOptions } from "./filter-options";
import { NewsItem, generateDummyNews } from "./news";
import { Recipe, generateDummyRecipes } from "./recipe";
import { ApiModelProperty } from "@nestjs/swagger";
import { WordPressPostModule } from "./wordpress-post-module";
import uuid = require("uuid");

export class ProductLineFilterModule extends WordPressPostModule {
  @ApiModelProperty({ type: [FilterOptions] })
  public quickFilterOptions: FilterOptions[];

  @ApiModelProperty({ type: [FilterOptions] })
  public productFilterOptions: FilterOptions[];

  @ApiModelProperty({ type: [NewsItem] })
  public relatedNewsItems: NewsItem[];

  @ApiModelProperty({ type: [Recipe] })
  public relatedRecipeItems: Recipe[];
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
        value: false,
        id: 1
      },
      {
        content: "Vegetarisch",
        value: false,
        id: 2
      },
      {
        content: "Veganistisch",
        value: false,
        id: 3
      }
    ],
    productFilterOptions: [
      {
        content: "Zeewieren",
        value: false,
        id: 4
      },
      {
        content: "Paddenstoelen en seitan",
        value: false,
        id: 5
      },
      {
        content: "Veganistischs",
        value: false,
        id: 6
      },
      {
        content: "Sojasauzen",
        value: false,
        id: 7
      },
      {
        content: "Rijst, bonen, zaden",
        value: false,
        id: 8
      },
      {
        content: "Noedels",
        value: false,
        id: 9
      }
    ],
    relatedNewsItems: generateDummyNews(),
    relatedRecipeItems: generateDummyRecipes()
  };
};