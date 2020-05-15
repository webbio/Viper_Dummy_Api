import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { CardModel } from "./card-model";
import { getCards } from "src/card/card-methods";

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

export class BusinessOverviewProduct {
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

export class BusinessOverviewCategory {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public id: string;
  @ApiModelProperty()
  public pictureURL: string;
  @ApiModelProperty({ type: BusinessOverviewLinks })
  public links: BusinessOverviewLinks;
}

export class BusinessOverviewProductsState {
  @ApiModelProperty({ type: [BusinessOverviewProduct] })
  public paginatedProductList: BusinessOverviewProduct[];
  @ApiModelProperty()
  public totalProducts: number;
}

export class BusinessOverviewCategoriesState {
  @ApiModelProperty({ type: [BusinessOverviewCategory] })
  public paginatedCategories: BusinessOverviewCategory[];
  @ApiModelProperty()
  public totalCategories: number;
}
class BusinessOverviewProductLine {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public id: string;
  @ApiModelProperty({ type: BusinessOverviewLinks })
  public links: BusinessOverviewLinks;
}
export class BusinessOverviewModule extends WordPressPostModule {
  @ApiModelProperty({ type: [BusinessOverviewProductLine] })
  public productLineList: BusinessOverviewProductLine[];
  @ApiModelProperty({ type: [BusinessOverviewCategory] })
  public categoryList: BusinessOverviewCategory[];
  @ApiModelProperty()
  public sidebarTitle: string;
  @ApiModelProperty()
  public totalCategories: number;
  @ApiModelProperty()
  public totalProducts: number;
}

const emptyLinks: BusinessOverviewLinks = {
  downloadAlleZip: "www.google.com",
  downloadAlleVideos: "/",
  downloadAlleProductInfo: "/",
  downloadAlleProductPhoto: "/",
};

const generateFullProductLine = (): BusinessOverviewProductLine[] => {
  const productLineList: BusinessOverviewProductLine[] = [];

  productLineList.push({
    title: "Latte",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Vegan cakes",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Nottenpasta",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Raw superfood",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Meditarrane keuken",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Japan moderne keuken",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Drop",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Noten, zaden en zuivruchten",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Muesli en cereals",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Granen en rijst",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Melen",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Peulvruchten",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Japan macrobiotisch",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Kokos",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Broodvarianten",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Ahornsiroop",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Chips",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Wafels",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Choco-treats",
    id: uuid(),
    links: emptyLinks,
  });
  productLineList.push({
    title: "Conserven",
    id: uuid(),
    links: emptyLinks,
  });

  return productLineList;
};

export const generateProductLineJapanCategories = (amount): BusinessOverviewCategory[] => {
  let productLineList: BusinessOverviewCategory[] = [];
  productLineList.push({
    title: "Noedels",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Zeewieren",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Paddenstoelen en seitan",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg",
    links: emptyLinks,

    id: uuid(),
  });
  productLineList.push({
    title: "Rijst, bonen, zaden",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg",
    links: emptyLinks,

    id: uuid(),
  });
  productLineList.push({
    title: "Bind- en zoetmiddelen",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Sojasauzen",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Miso",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Ume(boshi)",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Smaakmakers",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Crackers",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg",
    links: emptyLinks,
    id: uuid(),
  });

  productLineList.push({
    title: "Non-food",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg",
    links: emptyLinks,

    id: uuid(),
  });

  productLineList.push({
    title: "ALLES VOOR SUSHI",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg",
    links: emptyLinks,

    id: uuid(),
  });
  productLineList.push({
    title: "Noedels",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  if (amount < productLineList.length) {
    return productLineList.slice(0, amount);
  }
  while (productLineList.length < amount) {
    productLineList = productLineList.concat(productLineList);
  }
  return productLineList.slice(0, amount);
};

export const generateProductLineNoedelsProduct = (amount): BusinessOverviewProduct[] => {
  let productLineList: BusinessOverviewProduct[] = [];
  productLineList.push({
    title: "Bruine rijstnoedels met pompoen en gember",
    description: "Glutenvrij - 250g",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/6.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Boekweitnoedels met zoete aardappel",
    description: "Glutenvrij - 250g",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Bruine rijstnoedels met wakame",
    description: "Glutenvrij - 250g",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "100% Bruine rijstnoedels",
    description: "Glutenvrij - 250g",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Boekweitnoedels met zoete aardappel",
    description: "Glutenvrij - 250g",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Bruine rijstnoedels met wakame",
    description: "Glutenvrij - 250g",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "100% Bruine rijstnoedels",
    description: "Glutenvrij - 250g",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  productLineList.push({
    title: "Boekweitnoedels met zoete aardappel",
    description: "Glutenvrij - 250g",
    pictureURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.jpg",
    links: emptyLinks,
    id: uuid(),
  });
  if (amount < productLineList.length) {
    return productLineList.slice(0, amount);
  }
  while (productLineList.length < amount) {
    productLineList = productLineList.concat(productLineList);
  }
  return productLineList.slice(0, amount);
};
const TOTAL_CATEGORIES = 84;
const TOTAL_PRODUCTS = 12;
export const generateDummyBusinessOverviewData = (): BusinessOverviewModule => {
  const generatedProductLineList = generateFullProductLine();
  const generatedCategoryList = generateProductLineJapanCategories(TOTAL_CATEGORIES);

  return {
    name: "BusinessOverviewModule",
    topMargin: "0px",
    bottomMargin: "0px",
    sidebarTitle: "Productlijnen",
    background: {
      color: "#DDEDED",
    },
    productLineList: generatedProductLineList,
    totalCategories: generatedCategoryList.length,
    totalProducts: 0,
    categoryList: generatedCategoryList.slice(0, 12),
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    id: uuid(),
  };
};
