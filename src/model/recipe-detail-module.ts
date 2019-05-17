import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { Link } from './link';
import { HowToModel } from './how-to-model';
import { IngredientModel } from './ingredient-model';
import { ItemRecipeInfo } from './item-recipe-info';
import { RelatedProduct } from './related-product';
import { SocialMediaButtons } from './social-media-buttons';

export class RecipeDetailModule extends WordPressPostModule {
  @ApiModelProperty()
  public bgcolor?: string;

  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public subTitle: string;

  @ApiModelProperty()
  public howTo: HowToModel;

  @ApiModelProperty()
  public socialMediaButtons: SocialMediaButtons;

  @ApiModelProperty({ type: [ItemRecipeInfo] })
  public itensRecipeInfo: ItemRecipeInfo[];

  @ApiModelProperty({ type: [IngredientModel] })
  public ingredients: IngredientModel[];

  @ApiModelProperty()
  public ingredientsPics: string[];

  @ApiModelProperty()
  public sidebarTitle: string;

  @ApiModelProperty()
  public buttonTextRelatedPosts: string;

  @ApiModelProperty()
  public buttonURLRelatedPosts: string;

  @ApiModelProperty()
  public titleRelatedPosts: string;

  @ApiModelProperty({ type: [RelatedProduct] })
  public productsRelatedPosts: RelatedProduct[];
}

export const generateDummyRecipeDetailModule = (): RecipeDetailModule => {
  return {
    socialMediaButtons: {
      footerButtons: [
        {
          href: 'fb',
          icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/facebook.svg',
        },
        {
          href: 'linked',
          icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/linkedin.svg',
        },
        {
          href: 'twitter',
          icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/twitter.svg',
        },
        {
          href: 'mail',
          icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/mail.svg',
        },
      ],
      id: '44',
      topMargin: '1',
      bottomMargin: '5',
      name: 'RecipeDetailHeader',
    },
    howTo: {
      steps: [
        'Leg een vel bakpapier op een bakplaat en vervarm de oven voor op 175°C.',
        'Maal de havermout in een blender tot meel. Meng vervolgens alle ingrediënten door elkaar. ',
        'Maak kleine balletjes van het deeg, leg ze op de bakplaat en druk ze plat met een vork.',
        'Bak ze in 10-15 minuten gaar in de oven.',
      ],
      extraText:
        'Wil je ze eten zonder te bakken? Bewaar ze dan in de vriezer en haal ze eruit als je een chocomomentje nodig hebt!',
    },
    title: 'Vegan chocokoekjes met amandelpasta',
    subTitle:
      '  Deze koekjes kunnen gewoon altijd. Wist je dat je ze ook kunt eten zonder te bakken? Zet ze in dat geval in de vriezer tot je ze gaat eten.',
    itensRecipeInfo: [
      {
        text: 'Tussendoortje',
        icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/type.svg',
      },
      {
        text: '15 koekjes',
        icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/person.svg',
      },
      {
        text: '15-20 minuten',
        icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/time.svg',
      },
      { text: 'Vegan', icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/check.svg' },
      { text: 'Glutenvrij', icon: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/check.svg' },
    ],
    ingredients: [
      { name: 'Raw cacaopoeder', amount: '15g' },
      { name: 'Witte amandelpasta', amount: '50g' },
      { name: 'Ahornisiroop', amount: '80g' },
      { name: 'Kokosolie', amount: '50g' },
      { name: 'Havermout', amount: '120g' },
    ],
    sidebarTitle: 'Ingrediënten',
    // ingredientsPics: [
    //   'https://dummyimage.com/112x120/000/fff.jpg',
    //   'https://dummyimage.com/112x120/000/fff.jpg',
    //   'https://dummyimage.com/112x120/000/fff.jpg',
    // ],
    ingredientsPics: [
      'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/Screenshot+2019-05-14+at+09.54.34.png',
      'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/Screenshot+2019-05-14+at+09.54.37.png',
      'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/Screenshot+2019-05-14+at+09.54.41.png',
    ],

    productsRelatedPosts: [
      {
        title: '100% Bruine rijstnoedels',
        amount: '50g',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/Screenshot+2019-05-14+at+09.54.09.png',
        URL: '/',
      },
      {
        title: 'Boekweitnoedels met zoete aardappel',
        amount: '50g',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/Screenshot+2019-05-14+at+09.55.45.png',
        URL: '/',
      },
      {
        title: 'Bruine rijstnoedels met pompoen en gember',
        amount: '50g',
        picture:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/Screenshot+2019-05-14+at+09.54.26.png',
        URL: '/',
      },
    ],
    titleRelatedPosts: 'Gerelateerde producten',
    buttonTextRelatedPosts: 'Meer producten',
    buttonURLRelatedPosts: '/',
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'RecipeDetailModule',
  };
};
