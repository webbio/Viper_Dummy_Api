import { ApiModelProperty } from "@nestjs/swagger";

export class ProductCard {
  @ApiModelProperty()
  public link?: string;
  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public content?: string;
  @ApiModelProperty()
  public image?: string;
  @ApiModelProperty()
  public category?: string;
}

export const generateDummyProductCard = (): ProductCard[] => {
  return [
    {
      link: "/",
      title: "Title",
      category: "Noedels",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.png",
      content: "Content"
    },
    {
      link: "/",
      title: "Title",
      category: "Noedels",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png",
      content: "Content"
    },
    {
      link: "/",
      title: "Title",
      category: "Noedels",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg",
      content: "Content"
    },
    {
      link: "/",
      title: "Title",
      category: "Noedels",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg",
      content: "Content"
    },

    {
      link: "/",
      title: "Title",
      category: "Zeewieren",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/1.jpg",
      content: "Content"
    },
    {
      link: "/",
      title: "Title",
      category: "Zeewieren",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/2.jpg",
      content: "Content"
    },
    {
      link: "/",
      title: "Title",
      category: "Zeewieren",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/3.jpg",
      content: "Content"
    },
    {
      link: "/",
      title: "Title",
      category: "Zeewieren",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/4.jpg",
      content: "Content"
    },

    {
      link: "/",
      title: "Title",
      category: "Paddenstoelen en seitan",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/1.png",
      content: "Content"
    },
    {
      link: "/",
      title: "Title",
      category: "Paddenstoelen en seitan",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/2.jpg",
      content: "Content"
    },
    {
      link: "/",
      title: "Title",
      category: "Paddenstoelen en seitan",
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/3.jpg",
      content: "Content"
    }
  ];
};
