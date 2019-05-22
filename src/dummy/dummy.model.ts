import { WordPressPostModule } from 'src/model/wordpress-post-module';
import { ApiModelProperty } from '@nestjs/swagger';
import { NavBarModule } from 'src/model/nav-bar-module';
import { CTAModule } from 'src/model/cta-module';
import { FooterModule } from 'src/model/footer-component';
import { SocialMediaButtons } from 'src/model/social-media-buttons';
import { BodyTextModule } from 'src/model/bodytext-module';
import { WelcomeModule } from 'src/model/welcome-module';
import { InstagramWalllModule } from 'src/model/instagram-wall';
import { FeaturedItemModule } from 'src/model/featured-item';
import { ItemOverviewModule } from 'src/model/item-overview-module';
import { CardPaginationReturn } from 'src/card/card.model';
import { HowToModel } from 'src/model/how-to-model';
import { IngredientModel } from 'src/model/ingredient-model';
import { ItemRecipeInfo } from 'src/model/item-recipe-info';
import { RecipeDetailModule } from 'src/model/recipe-detail-module';
import { RecipeHeadCard } from 'src/model/recipe-head-card';
import { RelatedProduct } from 'src/model/related-product';
import { ToggleModule } from 'src/model/toggle-module';
import { ExpandablePanel } from 'src/model/expandable-panel';
import { OurTeamModule } from 'src/model/our-team-module';
import { ContactModule } from 'src/model/contact-module';
import { ProductOverviewModule } from 'src/model/product-overview';
import { SalePointModule } from 'src/model/sale-point-module';
import { BodyTextExpandedModule } from 'src/model/bodytext-expanded-module';
import { NotYetImplemented } from 'src/model/not-yet-implemented-module';
import { CardModel } from 'src/model/card-model';
import { RelatedProductsSlider } from 'src/model/related-products-slider';
import { GallerySliderModule } from 'src/model/gallery-slider';
import { MoreProducts } from 'src/model/more-products';
import { InfoHeaderModule } from 'src/model/info-header-module';
import { NavbarSearchCategory } from 'src/navbar-search/navbar-search-category';
import { NavbarSearchItem } from 'src/navbar-search/navbar-search-item';
import { NewsletterModule } from 'src/model/newsletter-module';
import { FAQOverviewModule } from 'src/model/faq-overview-module';
import { ProductDetailHeader } from 'src/model/product-detail-header';
import {
  ProductLineOverviewCard,
  ProductLineOverviewModule,
} from 'src/product-line-overview/product-line-card';

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
  public infoHeaderModule?: InfoHeaderModule;

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
  public productLineReturn?: ProductLineOverviewModule;

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
  public productOverview?: ProductOverviewModule;

  @ApiModelProperty()
  public bodyTextExpandedModule?: BodyTextExpandedModule;

  @ApiModelProperty()
  public notYetImplemented?: NotYetImplemented;

  @ApiModelProperty()
  public toggleModule?: ToggleModule;

  @ApiModelProperty()
  public expandablePanel?: ExpandablePanel;

  @ApiModelProperty()
  public relatedProductsSlider?: RelatedProductsSlider;

  @ApiModelProperty()
  public gallerySlider?: GallerySliderModule;

  @ApiModelProperty()
  public newsletterModule?: NewsletterModule;

  @ApiModelProperty()
  public navbarSearchCategory?: NavbarSearchCategory;

  @ApiModelProperty()
  public navbarSearchItem?: NavbarSearchItem;

  @ApiModelProperty()
  public faqOverviewModule?: FAQOverviewModule;

  @ApiModelProperty()
  public moreProducts?: MoreProducts;

  @ApiModelProperty()
  public productDetailHeader?: ProductDetailHeader;

  @ApiModelProperty()
  public productLineOverviewModel?: ProductLineOverviewCard;
}
