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
      title: 'Pack of noedels',
      category: 'Noedels',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'Yellow Noedels',
      category: 'Noedels',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'Green Noedels',
      category: 'Noedels',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'Simple Noedels',
      category: 'Noedels',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/7.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },

    {
      link: '/',
      title: 'Title',
      category: 'Zeewieren',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/1.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'Title',
      category: 'Zeewieren',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/2.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'Title',
      category: 'Zeewieren',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/3.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'Title',
      category: 'Zeewieren',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/4.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },

    {
      link: '/',
      title: 'Title',
      category: 'Paddenstoelen en seitan',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/1.png',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
    {
      link: '/',
      title: 'Title',
      category: 'Paddenstoelen en seitan',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/2.jpg',
      content: 'Content',
      subCategory: 'Vegetarisch',
    },
    {
      link: '/',
      title: 'Title',
      category: 'Paddenstoelen en seitan',
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/3.jpg',
      content: 'Content',
      subCategory: 'Glutenvrij',
    },
  ];
};
