import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { Link } from "./link";
import { HowToModel } from "./how-to-model";
import { IngredientModel } from "./ingredient-model";
import { ItemRecipeInfo } from "./item-recipe-info";
import { RelatedProduct } from "./related-product";

export class RecipeDetailModule extends WordPressPostModule {
  @ApiModelProperty()
  public bgcolor?: string;

  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public subTitle: string;

  @ApiModelProperty()
  public howTo: HowToModel;

  @ApiModelProperty({ type: [ItemRecipeInfo] })
  public itensRecipeInfo: ItemRecipeInfo[];

  @ApiModelProperty({ type: [IngredientModel] })
  public ingredients: IngredientModel[];

  @ApiModelProperty()
  public ingredientsPics: string[];

  @ApiModelProperty()
  public buttonTextRelatedPosts: string;

  @ApiModelProperty()
  public buttonURLRelatedPosts: string;

  @ApiModelProperty()
  public titleRelatedPosts?: string;

  @ApiModelProperty({ type: [RelatedProduct] })
  public productsRelatedPosts: RelatedProduct[];
}

export const generateDummyRecipeDetailModule = (): RecipeDetailModule => {
  return {
    howTo: {
      steps: [
        "Leg een vel bakpapier op een bakplaat en vervarm de oven voor op 175°C.",
        "Maal de havermout in een blender tot meel. Meng vervolgens alle ingrediënten door elkaar. ",
        "Maak kleine balletjes van het deeg, leg ze op de bakplaat en druk ze plat met een vork.",
        "Bak ze in 10-15 minuten gaar in de oven."
      ],
      extraText:
        "Wil je ze eten zonder te bakken? Bewaar ze dan in de vriezer en haal ze eruit als je een chocomomentje nodig hebt!"
    },
    title: "Vegan chocokoekjes met amandelpasta",
    subTitle:
      "  Deze koekjes kunnen gewoon altijd. Wist je dat je ze ook kunt eten zonder te bakken? Zet ze in dat geval in de vriezer tot je ze gaat eten.",
    itensRecipeInfo: [
      {
        text: "Tussendoortje",
        icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/type.svg"
      },
      {
        text: "15 koekjes",
        icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/person.svg"
      },
      {
        text: "15-20 minuten",
        icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/time.svg"
      },
      { text: "Vegan", icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/check.svg" },
      { text: "Glutenvrij", icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/check.svg" }
    ],
    ingredients: [
      { name: "Raw cacaopoeder", amount: "15g" },
      { name: "Witte amandelpasta", amount: "50g" },
      { name: "Ahornisiroop", amount: "80g" },
      { name: "Kokosolie", amount: "120g" }
    ],
    ingredientsPics: [
      "https://dummyimage.com/112x120/000/fff.jpg",
      "https://dummyimage.com/112x120/000/fff.jpg",
      "https://dummyimage.com/112x120/000/fff.jpg"
    ],
    productsRelatedPosts: [
      {
        title: "100% Bruine rijstnoedels",
        amount: "50g",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Boekweitnoedels met zoete aardappel",
        amount: "50g",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      },
      {
        title: "Bruine rijstnoedels met pompoen en gember",
        amount: "50g",
        picture: "https://dummyimage.com/197x130/000/fff.jpg",
        URL: "/"
      }
    ],
    buttonTextRelatedPosts: "Meer producten",
    buttonURLRelatedPosts: "/",
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "RecipeDetailModule"
  };
};
