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
  @ApiModelProperty()
  public subCategory?: string;
}

export const generateDummyProductCard = (): ProductCard[] => {
  return [
    {
      link: "/",
      title: "RIJSTNOEDELS RIJST-POMPOEN-GEMBER 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-5.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
    {
      link: "/",
      title: "ZWARTE RIJSTNOEDELS BIOLOGISCH 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
    {
      link: "/",
      title: "VOLKOREN RIJSTNOEDELS MET WAKAME 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
      content: "Content",
      subCategory: "Vegetarisch",
    },
    {
      link: "/",
      title: "TAGLIATELLE MET KASTANJE BIO 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",
      content: "Content",
      subCategory: "Vegetarisch",
    },
    {
      link: "/",
      title: "RIJSTNOEDELS RIJST-POMPOEN-GEMBER 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-5.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
    {
      link: "/",
      title: "ZWARTE RIJSTNOEDELS BIOLOGISCH 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
    {
      link: "/",
      title: "VOLKOREN RIJSTNOEDELS MET WAKAME 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
      content: "Content",
      subCategory: "Vegetarisch",
    },
    {
      link: "/",
      title: "TAGLIATELLE MET KASTANJE BIO 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",
      content: "Content",
      subCategory: "Vegetarisch",
    },
    {
      link: "/",
      title: "RIJSTNOEDELS RIJST-POMPOEN-GEMBER 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-5.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
    {
      link: "/",
      title: "ZWARTE RIJSTNOEDELS BIOLOGISCH 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
    {
      link: "/",
      title: "VOLKOREN RIJSTNOEDELS MET WAKAME 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
      content: "Content",
      subCategory: "Vegetarisch",
    },
    {
      link: "/",
      title: "TAGLIATELLE MET KASTANJE BIO 250G",
      category: "Noedels",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-2.jpg",
      content: "Content",
      subCategory: "Vegetarisch",
    },

    {
      link: "/",
      title: "KOMHU",
      category: "Zeewieren",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
    {
      link: "/",
      title: "WAHAME",
      category: "Zeewieren",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
    {
      link: "/",
      title: "ARAME",
      category: "Zeewieren",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",
      content: "Content",
      subCategory: "Vegetarisch",
    },
    {
      link: "/",
      title: "Ao MORI",
      category: "Zeewieren",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",
      content: "Content",
      subCategory: "Vegetarisch",
    },

    {
      link: "/",
      title: "SEITAN IN TAMARISAUS 700G",
      category: "Paddenstoelen en seitan",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-6.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
    {
      link: "/",
      title: "SEITAN IN TAMARISAUS 350G",
      category: "Paddenstoelen en seitan",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
      content: "Content",
      subCategory: "Vegetarisch",
    },
    {
      link: "/",
      title: "CRUNCHY PINDAKAAS 250G",
      category: "Paddenstoelen en seitan",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/products/Decent/product-3.jpg",
      content: "Content",
      subCategory: "Glutenvrij",
    },
  ];
};
