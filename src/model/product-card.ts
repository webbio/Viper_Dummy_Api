import { ApiModelProperty } from '@nestjs/swagger';

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
      link: '/',
      title: 'RIJSTNOEDELS RIJST-POMPOEN-GEMBER 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'ZWARTE RIJSTNOEDELS BIOLOGISCH 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'VOLKOREN RIJSTNOEDELS MET WAKAME 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'TAGLIATELLE MET KASTANJE BIO 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/7.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'RIJSTNOEDELS RIJST-POMPOEN-GEMBER 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'ZWARTE RIJSTNOEDELS BIOLOGISCH 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'VOLKOREN RIJSTNOEDELS MET WAKAME 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'TAGLIATELLE MET KASTANJE BIO 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/7.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'RIJSTNOEDELS RIJST-POMPOEN-GEMBER 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'ZWARTE RIJSTNOEDELS BIOLOGISCH 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'VOLKOREN RIJSTNOEDELS MET WAKAME 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'TAGLIATELLE MET KASTANJE BIO 250G',
      category: 'Noedels',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/7.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },

    {
      link: '/',
      title: 'KOMHU',
      category: 'Zeewieren',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/1.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'WAHAME',
      category: 'Zeewieren',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/2.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'ARAME',
      category: 'Zeewieren',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/3.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'Ao MORI',
      category: 'Zeewieren',
      image: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/4.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },

    {
      link: '/',
      title: 'SEITAN IN TAMARISAUS 700G',
      category: 'Paddenstoelen en seitan',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/1.png',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'SEITAN IN TAMARISAUS 350G',
      category: 'Paddenstoelen en seitan',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/2.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'CRUNCHY PINDAKAAS 250G',
      category: 'Paddenstoelen en seitan',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/3.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
  ];
};
