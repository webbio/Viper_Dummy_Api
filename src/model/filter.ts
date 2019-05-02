import { WordPressPostModule } from "./wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { FilterOptionsModule } from "./filter-options";

export class FilterModule {
  @ApiModelProperty({ type: [FilterOptionsModule] })
  public options?: FilterOptionsModule[];
  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public max?: number;
}

export const generateDummyFilterModule = (): FilterModule[] => {
  return [
    {
      options: [
        {
          label: "Glutenvrij",
          slug: "Glutenvrij",
          id: 1
        },
        {
          label: "Vegetarisch",
          slug: "vegetarisch",
          id: 2
        },
        {
          label: "Veganistisch",
          slug: "veganistisch",
          id: 3
        }
      ],
      title: "Snel filteren",
      max: 2
    },
    {
      options: [
        {
          label: "Zeewieren",
          slug: "zeewieren",
          id: 4
        },
        {
          label: "Paddenstoelen en seitan",
          slug: "paddenstoelen-en-seitan",
          id: 5
        },
        {
          label: "Veganistisch",
          slug: "veganistisch-2",
          id: 6
        },
        {
          label: "Sojasauzen",
          slug: "sojasauzen",
          id: 7
        },
        {
          label: "Rijst, bonen, zaden",
          slug: "rijst-bonen-zaden",
          id: 8
        },
        {
          label: "Paddenstoelen en seitan",
          slug: "paddenstoelenenseitan",
          id: 9
        },
        {
          label: "Noedels",
          slug: "noedels",
          id: 10
        }
      ],
      title: "Producten",
      max: 4
    }
  ];
};
