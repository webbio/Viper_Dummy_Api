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
          isClicked: false,
          id: 1
        },
        {
          label: "Vegetarisch",
          slug: "vegetarisch",
          isClicked: false,
          id: 2
        },
        {
          label: "Veganistisch",
          slug: "veganistisch",
          isClicked: false,
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
          isClicked: false,
          id: 4
        },
        {
          label: "Paddenstoelen en seitan",
          slug: "paddenstoelen-en-seitan",
          isClicked: false,
          id: 5
        },
        {
          label: "Veganistisch",
          slug: "veganistisch-2",
          isClicked: false,
          id: 6
        },
        {
          label: "Sojasauzen",
          slug: "sojasauzen",
          isClicked: false,
          id: 7
        },
        {
          label: "Rijst, bonen, zaden",
          slug: "rijst-bonen-zaden",
          isClicked: false,
          id: 8
        },
        {
          label: "Paddenstoelen en seitan",
          slug: "paddenstoelenenseitan",
          isClicked: false,
          id: 9
        },
        {
          label: "Noedels",
          slug: "noedels",
          isClicked: false,
          id: 10
        }
      ],
      title: "Producten",
      max: 4
    }
  ];
};
