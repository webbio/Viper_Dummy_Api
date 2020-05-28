import { ApiModelProperty } from "@nestjs/swagger";
export class IconLabel {
  @ApiModelProperty()
  public icon: string;

  @ApiModelProperty()
  public label: string;
}
export class Recipe {
  @ApiModelProperty({ type: [IconLabel] })
  public label: IconLabel[];

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
export const generateDummyRecipes = (): Recipe[] => {
  return [
    {
      label: [
        {
          icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/person.svg",
          label: "1",
        },
        {
          icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/time.svg",
          label: "20 minuten",
        },
      ],
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
      content: "Soba met frisse gember-sojasaus",
      category: "Recept",
      buttonText: "Bekijk meer ",
      link: "/recipe-single",
    },
    {
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
      label: [
        {
          icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/person.svg",
          label: "2",
        },
        {
          icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/time.svg",
          label: "20 minuten",
        },
      ],
      content: "Yaki soba (gebakken sobanoedels)",
      category: "Recept",
      buttonText: "Bekijk meer ",
      link: "/recipe-single",
    },
    {
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
      label: [
        {
          icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/person.svg",
          label: "3",
        },
        {
          icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/time.svg",
          label: "15 minuten",
        },
      ],
      content: "Udon met daikon in miso-tamarisaus",
      category: "Recept",
      buttonText: "Bekijk meer",
      link: "/recipe-single",
    },
  ];
};
