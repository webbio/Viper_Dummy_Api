import { ProductLineOverviewCard, ProductLineOverviewModule } from './product-line-card';
import uuid = require('uuid');

const generateProductCardsUpTo7 = (amount: number): ProductLineOverviewCard[] => {
  const productList: ProductLineOverviewCard[] = [];
  if (amount === 1) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image: 'http://c1.quickcachr.fotos.sapo.pt/i/G6102a10b/20523935_jLSiU.jpeg',
      title: 'Gezond ontbijten',
      content: 'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
    });
  }
  if (amount >= 2) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image:
        'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2017/04/why-is-japanese-diet-so-healthy-guide-image-700-350.jpg',
      title: 'Japan moderne keuken',
      content: 'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
    });
  }
  if (amount >= 3) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image:
        'https://abrilsuperinteressante.files.wordpress.com/2017/10/por-que-os-cereais-integrais-sc3a3o-mais-caros-que-os-refinados.png',
      title: 'l onze muesli\'s en cereals',
      content: 'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
    });
  }
  if (amount >= 4) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MDAvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzcyMjcxODA3OS5qcGc=',
      title: 'Onze Superfoods!',
      content: 'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
    });
  }

  if (amount >= 5) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/c9/46/ab/almoco-organico.jpg',
      title: 'Heerlijke bio lunches',
      content: 'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
    });
  }
  if (amount >= 6) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200',
      title: 'Lorem ipsum di Tor',
      content: 'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
    });
  }
  if (amount >= 7) {
    productList.push({
      buttonText: 'Bekijk deze producten',
      link: '/',
      image: 'https://www.wandertravel.nl/wp-content/uploads/2017/10/drop800.jpg',
      title: 'Biodrop?',
      content: 'Integer non est molestie massa interdum fringilla. Donec finibus arcu tellus...',
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
    bottomMargin: ' 0px',
    topMargin: '0px',
    name: 'ProductLineStoryOverviewModule',
    productsLine: generateProductLineCardList(9),
  };
};

export { generateProductLineCardList, generateProductLineStoryOverviewModule };
