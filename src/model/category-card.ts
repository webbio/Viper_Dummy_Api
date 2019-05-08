import { ApiModelProperty } from "@nestjs/swagger";

export class CategoryCard {
  @ApiModelProperty()
  public link?: string;
  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public button?: any;
  @ApiModelProperty()
  public category?: string;
}

export const generateDummyCategoryCard = (): CategoryCard[] => {
  return [
    {
      link: "/",
      title: "Noedels",
      category: "Noedels",
      button: { title: "Bekijk alle 12" }
    },
    {
      link: "/",
      title: "Zeewieren",
      category: "Zeewieren",
      button: { title: "Bekijk alle 12" }
    },
    {
      link: "/",
      title: "Paddenstolen en seitan",
      category: "Paddenstoelen en seitan",
      button: { title: "Bekijk alle 12" }
    }
  ];
};
