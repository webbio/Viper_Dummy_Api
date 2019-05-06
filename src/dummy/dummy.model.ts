import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { NavBarModule } from "src/model/nav-bar-module";
import { CTAModule } from "src/model/cta-module";
import { FooterModule } from "src/model/footer-component";
import { SocialMediaButtons } from "src/model/social-media-buttons";
import { InfoHeader } from "src/model/info-header-module";
import { BodyTextModule } from "src/model/bodytext-module";
import { WelcomeModule } from "src/model/welcome-module";
import { InstagramWalllModule } from "src/model/instagram-wall";
import { FeaturedItemModule } from "src/model/featured-item";
import { ItemOverviewModule } from "src/model/item-overview-module";
import { CardPaginationReturn } from "src/card/card.model";
import { HowToModel } from "src/model/how-to-model";
import { IngredientModel } from "src/model/ingredient-model";
import { ItemRecipeInfo } from "src/model/item-recipe-info";
import { RecipeDetailModule } from "src/model/recipe-detail-module";
import { RecipeHeadCard } from "src/model/recipe-head-card";
import { RelatedProduct } from "src/model/related-product";
import { ToggleModule } from "src/model/toggle-module";
import { ExpandablePanel } from "src/model/expandable-panel";
import { OurTeamModule } from "src/model/our-team-module";
import { ContactModule } from "src/model/contact-module";
import { ProductOverview } from "src/model/product-overview";
import { SalePointModule } from "src/model/sale-point-module";
import { BodyTextExpandedModule } from "src/model/bodytext-expanded-module";
import { NotYetImplemented } from "src/model/not-yet-implemented-module";
import { CardModel } from "src/model/card-model";
import { ProductLineStoryOverviewModule } from "src/model/product-line-story-overview-module";
import { SidebarModule } from "src/model/sidebar-module";
import { ProductCardsFilter } from "src/product-cards/product-card.model";
import { SidebarReturn } from "src/product-filter/product-filter.model";
import { ContactForm } from "src/model/contact-form";
import { ProductLineFilterModule } from "src/model/product-line-filter-module";

export class DummyModel {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public description: string;

  @ApiModelProperty({ type: [WordPressPostModule] })
  public wordPressPostModules: WordPressPostModule[];

  // change NavBarModule to module you are working on
  @ApiModelProperty()
  public playgroundModule?: NavBarModule;

  @ApiModelProperty()
  public ctaModule?: CTAModule;

  @ApiModelProperty()
  public footerModule?: FooterModule;

  @ApiModelProperty()
  public socialMediaButtons?: SocialMediaButtons;

  @ApiModelProperty()
  public navBarModule?: NavBarModule;

  @ApiModelProperty()
  public infoHeaderModule?: InfoHeader;

  @ApiModelProperty()
  public bodyTextModule?: BodyTextModule;

  @ApiModelProperty()
  public welcomeModule?: WelcomeModule;

  @ApiModelProperty()
  public InstagramWalllModule?: InstagramWalllModule;

  @ApiModelProperty()
  public FeaturedItemModule?: FeaturedItemModule;
  @ApiModelProperty()
  public itemOverviewModule?: ItemOverviewModule;

  @ApiModelProperty()
  public card?: CardModel;

  @ApiModelProperty()
  public cardPaginationReturn?: CardPaginationReturn;

  @ApiModelProperty()
  public howTo?: HowToModel;

  @ApiModelProperty()
  public ingredientModel?: IngredientModel;

  @ApiModelProperty()
  public itemRecipeInfo?: ItemRecipeInfo;

  @ApiModelProperty()
  public recipeDetailModule?: RecipeDetailModule;

  @ApiModelProperty()
  public recipeHeadCard?: RecipeHeadCard;

  @ApiModelProperty()
  public relatedProduct?: RelatedProduct;

  @ApiModelProperty()
  public salePointModule?: SalePointModule;

  @ApiModelProperty()
  public ourTeamModule?: OurTeamModule;

  @ApiModelProperty()
  public contactModule?: ContactModule;

  @ApiModelProperty()
  public ContactForm?: ContactForm;

  @ApiModelProperty()
  public productOverview?: ProductOverview;

  @ApiModelProperty()
  public bodyTextExpandedModule?: BodyTextExpandedModule;

  @ApiModelProperty()
  public notYetImplemented?: NotYetImplemented;

  @ApiModelProperty()
  public toggleModule?: ToggleModule;

  @ApiModelProperty()
  public expandablePanel?: ExpandablePanel;

  @ApiModelProperty()
  public sidebarModule?: SidebarModule;

  @ApiModelProperty()
  public productCardFilter?: ProductCardsFilter;

  @ApiModelProperty()
  public productSidebarFilter?: SidebarReturn;

  @ApiModelProperty()
  public productLineStoryOverviewModule?: ProductLineStoryOverviewModule;

  @ApiModelProperty()
  public productLineFilterModule?: ProductLineFilterModule;
}
