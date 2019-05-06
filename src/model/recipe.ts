import { ApiModelProperty } from "@nestjs/swagger";

export class Recipe {
  @ApiModelProperty()
  public numPeople: string;

  @ApiModelProperty()
  public time: string;

  @ApiModelProperty()
  public content: string;

  @ApiModelProperty()
  public imageUrl: string;

  @ApiModelProperty()
  public category: string;

  @ApiModelProperty()
  public buttonText: string;

  @ApiModelProperty()
  public link: string;
}
export const generateDummyRecipesModule = (): Recipe[] => {
  return [
    {
      imageUrl:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
      time: "20 minuten",
      numPeople: "1 persoon",
      content: "Soba met frisse gember-sojasaus",
      category: "Recept",
      buttonText: "Bekijk meer recepten",
      link: "./"
    },
    {
      imageUrl:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
      time: "20 minuten",
      numPeople: "2 persoon",
      content: "Yaki soba (gebakken sobanoedels)",
      category: "Recept",
      buttonText: "Bekijk meer recepten",
      link: "./"
    },
    {
      imageUrl:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
      time: "15 minuten",
      numPeople: "3 persoon",
      content: "Udon met daikon in miso-tamarisaus",
      category: "Recept",
      buttonText: "Bekijk meer recepten",
      link: "./"
    }
  ];
};
