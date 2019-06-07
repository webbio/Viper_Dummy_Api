import {
  ProductLineOverviewCard,
  ProductLineOverviewModule,
} from './product-line-card';
import uuid = require('uuid');
import { categories } from 'src/card/card-generator';

export const diets = ['Glutenvrij', 'Vegetarisch', 'Veganistisch'];

const generateProductCardsUpTo7 = (
  amount: number,
): ProductLineOverviewCard[] => {
  const productList: ProductLineOverviewCard[] = [];
  if (amount === 1) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image:
        'https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/productLineOverview/1.jpg',
      title: 'Gezond ontbijten',
      content:
        'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
      categoryDetail: categories[0],
      diet: diets[0],
    });
  }
  if (amount >= 2) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image:
        'https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/productLineOverview/2.jpg',
      title: 'Japan moderne keuken',
      content:
        'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
      categoryDetail: categories[1],
      diet: diets[1],
    });
  }
  if (amount >= 3) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image:
        'https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/productLineOverview/3.png',
      title: 'l onze muesli\'s en cereals',
      content:
        'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
      categoryDetail: categories[2],
      diet: diets[0],
    });
  }
  if (amount >= 4) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image:
        'https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/productLineOverview/1.jpg',
      title: 'Onze Superfoods!',
      content:
        'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
      categoryDetail: categories[3],
      diet: diets[1],
    });
  }

  if (amount >= 5) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image:
        'https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/productLineOverview/4.jpg',
      title: 'Heerlijke bio lunches',
      content:
        'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
      categoryDetail: categories[4],
      diet: diets[2],
    });
  }
  if (amount >= 6) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image:
        'https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/productLineOverview/5.jpg',
      title: 'Lorem ipsum di Tor',
      content:
        'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
      categoryDetail: categories[5],
      diet: diets[0],
    });
  }
  if (amount >= 7) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image:
        'https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/productLineOverview/6.jpg',
      title: 'Biodrop?',
      content:
        'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
      categoryDetail: categories[1],
      diet: diets[1],
    });
  }
  return productList;
};

const generateProductLineCardList = (length: number): any[] => {
  const generateProductLineCardList = [];
  for (let i = 0; i < length; i += 6) {
    const remain = length + 1 - i;
    const cardsTobeAdd = generateProductCardsUpTo7(remain);
    for (let j = 0; j < cardsTobeAdd.length; j += 1) {
      cardsTobeAdd[j].title = `${cardsTobeAdd[j].title} #${i + 1 + j}`;
      generateProductLineCardList.push(cardsTobeAdd[j]);
    }
  }
  return generateProductLineCardList;
};

const generateProductLineStoryOverviewModule = (): ProductLineOverviewModule => {
  return {
    id: uuid(),
    diets,
    categories,
    bottomMargin: ' 0px',
    topMargin: '0px',
    name: 'ProductLineStoryOverviewModule',
    background: {
      backgroundColour: '#f5fafa',
    },
    productsLine: generateProductLineCardList(9),
  };
};

export { generateProductLineCardList, generateProductLineStoryOverviewModule };
