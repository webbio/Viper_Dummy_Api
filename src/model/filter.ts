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
  @ApiModelProperty()
  public button?: string;
}

export const generateDummyFilterModule = (): FilterModule[] => {
  return [
    {
      options: [
        {
          content: "Glutenvrij",
          value: "Glutenvrij",
          id: 1
        },
        {
          content: "Vegetarisch",
          value: "vegetarisch",
          id: 2
        },
        {
          content: "Veganistisch",
          value: "veganistisch",
          id: 3
        }
      ],
      title: "Snel filteren",
      max: 2,
      button: "Meer producten"
    },
    {
      options: [
        {
          content: "Zeewieren",
          value: "zeewieren",
          id: 4
        },
        {
          content: "Paddenstoelen en seitan",
          value: "paddenstoelen-en-seitan",
          id: 5
        },
        {
          content: "Veganistisch",
          value: "veganistisch-2",
          id: 6
        },
        {
          content: "Sojasauzen",
          value: "sojasauzen",
          id: 7
        },
        {
          content: "Rijst, bonen, zaden",
          value: "rijst-bonen-zaden",
          id: 8
        },
        {
          content: "Paddenstoelen en seitan",
          value: "paddenstoelenenseitan",
          id: 9
        },
        {
          content: "Noedels",
          value: "noedels",
          id: 10
        }
      ],
      title: "Producten",
      max: 4,
      button: "Meer producten"
    }
  ];
};
