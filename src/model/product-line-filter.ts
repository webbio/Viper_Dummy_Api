import { FilterOptions } from './filter-options';
import { NewsItem, generateDummyNews } from './news';
import { Recipe, generateDummyRecipes } from './recipe';
import { ApiModelProperty } from '@nestjs/swagger';

export class ProductLineFilter {
  @ApiModelProperty({ type: [FilterOptions] })
  public quickFilterOptions: FilterOptions[];

  @ApiModelProperty({ type: [FilterOptions] })
  public productFilterOptions: FilterOptions[];

  @ApiModelProperty({ type: [NewsItem] })
  public relatedNewsItems: NewsItem[];

  @ApiModelProperty({ type: [Recipe] })
  public relatedRecipeItems: Recipe[];

  @ApiModelProperty()
  public quickFilterTitle: string;

  @ApiModelProperty()
  public productFilterTitle: string;

  @ApiModelProperty()
  public quickFilterMax: number;

  @ApiModelProperty()
  public productFilterMax: number;

  @ApiModelProperty()
  public showMoreButton: string;
}

export const generateProductLineFilter = (): ProductLineFilter => {
  return {
    quickFilterOptions: [
      {
        content: 'Glutenvrij',
        value: false,
        id: 1,
      },
      {
        content: 'Vegetarisch',
        value: false,
        id: 2,
      },
      {
        content: 'Veganistisch',
        value: false,
        id: 3,
      },
    ],
    quickFilterTitle: 'Snel filteren',
    productFilterTitle: 'Producten',
    showMoreButton: 'Meer',
    productFilterMax: 5,
    quickFilterMax: 3,

    productFilterOptions: [
      {
        content: 'Zeewieren',
        value: false,
        id: 4,
      },
      {
        content: 'Paddenstoelen en seitan',
        value: false,
        id: 5,
      },
      {
        content: 'Veganistischs',
        value: false,
        id: 6,
      },
      {
        content: 'Sojasauzen',
        value: false,
        id: 7,
      },
      {
        content: 'Rijst, bonen, zaden',
        value: false,
        id: 8,
      },
      {
        content: 'Noedels',
        value: false,
        id: 9,
      },
    ],
    relatedNewsItems: generateDummyNews(),
    relatedRecipeItems: generateDummyRecipes(),
  };
};
