import { ApiModelProperty } from '@nestjs/swagger';

export class CategoryCard {
  @ApiModelProperty()
  public link?: string;
  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public buttonText?: string;
  @ApiModelProperty()
  public category?: string;
}

export const generateDummyCategoryCard = (): CategoryCard[] => [
  {
    link: '/product-group/',
    title: 'Noedels',
    category: 'Noedels',
    buttonText: 'Bekijk alle 12',
  },
  {
    link: '/product-group/',
    title: 'Zeewieren',
    category: 'Zeewieren',
    buttonText: 'Bekijk alle 12',
  },
  {
    link: '/product-group/',
    title: 'Paddenstolen en seitan',
    category: 'Paddenstoelen en seitan',
    buttonText: 'Bekijk alle 12',
  },
];
