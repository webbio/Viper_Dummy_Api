import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { CardModel } from './card-model';
import { getCards } from 'src/card/card-methods';

class BusinessOverviewLinks {
  @ApiModelProperty()
  public downloadAlleZip: string;
  @ApiModelProperty()
  public downloadAlleVideos: string;
  @ApiModelProperty()
  public downloadAlleProductInfo: string;
  @ApiModelProperty()
  public downloadAlleProductPhoto: string;
}

class BusinessOverviewProduct {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public description: string;
  @ApiModelProperty()
  public id: string;
  @ApiModelProperty()
  public pictureURL: string;
  @ApiModelProperty({ type: BusinessOverviewLinks })
  public links: BusinessOverviewLinks;
}

class BusinessOverviewCategory {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public id: string;
  @ApiModelProperty()
  public pictureURL: string;
  @ApiModelProperty({ type: BusinessOverviewLinks })
  public links: BusinessOverviewLinks;
  @ApiModelProperty({ type: [BusinessOverviewProduct] })
  public productsPaginated: BusinessOverviewProduct[];
  @ApiModelProperty()
  public productsTotal: number;
}

class BusinessOverviewProductLine {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public id: string;
  @ApiModelProperty({ type: [BusinessOverviewCategory] })
  public categoriesPaginated: BusinessOverviewCategory[];
  @ApiModelProperty()
  public categoriesTotal: number;
  @ApiModelProperty({ type: BusinessOverviewLinks })
  public links: BusinessOverviewLinks;
}
export class BusinessOverviewModule extends WordPressPostModule {
  @ApiModelProperty({ type: [BusinessOverviewProductLine] })
  public productLineList: BusinessOverviewProductLine[];
  @ApiModelProperty()
  public sidebarTitle: string;
}

const emptyLinks: BusinessOverviewLinks = {
  downloadAlleZip: '/',
  downloadAlleVideos: '/',
  downloadAlleProductInfo: '/',
  downloadAlleProductPhoto: '/',
};

const generateProductLineNoedels = (): BusinessOverviewProductLine[] => {
  const productLineList: BusinessOverviewProductLine[] = [];
  const noedelsProducts = generateProductLineNoedelsProduct('');
  const categoriesTotal = noedelsProducts.length;

  productLineList.push({
    title: 'Latte',
    categoriesPaginated: generateProductLineJapanCategories('Latte'),
    categoriesTotal,
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Vegan cakes',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Nottenpasta',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Raw superfood',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Meditarrane keuken',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Japan moderne keuken',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Drop',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Noten, zaden en zuivruchten',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Muesli en cereals',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Granen en rijst',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Melen',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Peulvruchten',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Japan macrobiotisch',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Kokos',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Broodvarianten',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Ahornsiroop',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Chips',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Wafels',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Choco-treats',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  productLineList.push({
    title: 'Conserven',
    categoriesPaginated: [],
    id: uuid(),
    categoriesTotal,
    links: emptyLinks,
  });
  return productLineList;
};

const generateProductLineJapanCategories = (category): BusinessOverviewCategory[] => {
  const productLineList: BusinessOverviewCategory[] = [];
  const productNoedels = generateProductLineNoedelsProduct(category);
  const productsTotal = productNoedels.length;
  productLineList.push({
    title: 'Noedels',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Noedels'),
    productsTotal,
    id: uuid(),
  });
  productLineList.push({
    title: 'Zeewieren',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Zeewieren'),
    productsTotal,
    id: uuid(),
  });
  productLineList.push({
    title: 'Paddenstoelen en seitan',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Paddenstoelen en seitan'),
    productsTotal,
    id: uuid(),
  });
  productLineList.push({
    title: 'Rijst, bonen, zaden',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Rijst'),
    productsTotal,
    id: uuid(),
  });
  productLineList.push({
    title: 'Bind- en zoetmiddelen',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Bind'),
    productsTotal,
    id: uuid(),
  });
  productLineList.push({
    title: 'Sojasauzen',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Sojasauzen'),
    productsTotal,
    id: uuid(),
  });
  productLineList.push({
    title: 'Miso',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Miso'),
    productsTotal,
    id: uuid(),
  });
  productLineList.push({
    title: 'Ume(boshi)',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Ume'),
    productsTotal,
    id: uuid(),
  });
  productLineList.push({
    title: 'Smaakmakers',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Smaakmakers'),
    productsTotal,
    id: uuid(),
  });
  productLineList.push({
    title: 'Crackers',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Crackers'),
    productsTotal,
    id: uuid(),
  });

  productLineList.push({
    title: 'Non-food',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Non-food'),
    productsTotal,
    id: uuid(),
  });

  productLineList.push({
    title: 'ALLES VOOR SUSHI',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    productsPaginated: generateProductLineNoedelsProduct('Sushi'),
    productsTotal,
    id: uuid(),
  });

  return productLineList;
};

const generateProductLineNoedelsProduct = (category: string): BusinessOverviewProduct[] => {
  const productLineList: BusinessOverviewProduct[] = [];
  productLineList.push({
    title: category + ' - Bruine rijstnoedels met pompoen en gember',
    description: 'Glutenvrij - 250g',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg',
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: category + ' - Boekweitnoedels met zoete aardappel',
    description: 'Glutenvrij - 250g',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg',
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: category + ' - Bruine rijstnoedels met wakame',
    description: 'Glutenvrij - 250g',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: category + ' - 100% Bruine rijstnoedels',
    description: 'Glutenvrij - 250g',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg',
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: category + ' - Boekweitnoedels met zoete aardappel',
    description: 'Glutenvrij - 250g',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg',
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: category + ' - Bruine rijstnoedels met wakame',
    description: 'Glutenvrij - 250g',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: category + ' - 100% Bruine rijstnoedels',
    description: 'Glutenvrij - 250g',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg',
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: category + ' - Boekweitnoedels met zoete aardappel',
    description: 'Glutenvrij - 250g',
    pictureURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg',
    links: emptyLinks,
    id: uuid(),
  });

  return productLineList;
};

export const generateDummyBusinessOverviewData = (): BusinessOverviewModule => {
  return {
    name: 'BusinessOverviewModule',
    topMargin: '0px',
    bottomMargin: '0px',
    sidebarTitle: 'Productlijnen',
    background: {
      backgroundColour: '#F5FAFA',
    },
    productLineList: generateProductLineNoedels(),
    id: uuid(),
  };
};
