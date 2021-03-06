import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { NavBarModule } from "src/model/nav-bar-module";
import { CTAModule } from "src/model/cta-module";
import { FooterModule } from "src/model/footer-component";
import { BodyTextModule } from "src/model/bodytext-module";
import { MainHeaderModule } from "src/model/main-header-module";
import { InstagramWalllModule } from "src/model/instagram-wall";
import { FeaturedItemModule } from "src/model/featured-item";
import { ItemOverviewModule, ItemOverviewStateModule } from "src/model/item-overview-module";
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
import { RelatedProductsSliderModule } from "src/model/related-products-slider";
import { GallerySliderModule } from "src/model/gallery-slider";
import { MoreProducts } from "src/model/more-products";
import { InfoHeaderModule } from "src/model/info-header-module";
import { NavbarSearchCategory } from "src/navbar-search/navbar-search-category";
import { NavbarSearchItem } from "src/navbar-search/navbar-search-item";
import { NewsletterModule } from "src/model/newsletter-module";
import { FAQOverviewModule } from "src/model/faq-overview-module";
import { TabsModule } from "src/model/tab-module";
import { ProductDetailHeader } from "src/model/product-detail-header";
import { ProductLineOverviewCard, ProductLineOverviewModule } from "src/product-line-overview/product-line-card";
import { RelatedLinksModule } from "src/model/related-links-module";
import { ContactForm } from "src/model/contact-form";
import { ProductLineSingleModule } from "src/model/product-line-single-module";
import { ProductOverviewSimpleModule } from "src/model/product-overview-simple-module";
import { LoginModule } from "src/model/login";
import { SignUpModule } from "src/model/sign-up";
import { NewsOverviewStateModule, NewsOverviewModule } from "src/model/news-overview-module";
import { NotFoundModule } from "src/model/not-found-module";
import {
  BusinessOverviewModule,
  BusinessOverviewProductsState,
  BusinessOverviewCategoriesState,
} from "src/model/business-overview-module";
import { LikeSocialMediaButtons, ShareSocialMediaButtons } from "src/model/social-media-module";

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
  public likeMediaButtons?: LikeSocialMediaButtons;
  @ApiModelProperty()
  public shareMediaButtons?: ShareSocialMediaButtons;
  @ApiModelProperty()
  public businessOverviewProductsReturn?: BusinessOverviewProductsState;
  @ApiModelProperty()
  public businessOverviewCategoriesReturn?: BusinessOverviewCategoriesState;

  @ApiModelProperty()
  public navBarModule?: NavBarModule;

  @ApiModelProperty()
  public infoHeaderModule?: InfoHeaderModule;

  @ApiModelProperty()
  public bodyTextModule?: BodyTextModule;

  @ApiModelProperty()
  public businessOverviewModule?: BusinessOverviewModule;

  @ApiModelProperty()
  public gallerySliderModule?: GallerySliderModule;

  @ApiModelProperty()
  public relatedProductsSlider?: RelatedProductsSliderModule;

  @ApiModelProperty()
  public mainHeaderModule?: MainHeaderModule;

  @ApiModelProperty()
  public InstagramWalllModule?: InstagramWalllModule;

  @ApiModelProperty()
  public FeaturedItemModule?: FeaturedItemModule;

  @ApiModelProperty()
  public itemOverviewModule?: ItemOverviewModule;
  @ApiModelProperty()
  public notFoundModule?: NotFoundModule;

  @ApiModelProperty()
  public newsOverviewModule?: NewsOverviewModule;

  @ApiModelProperty()
  public card?: CardModel;

  @ApiModelProperty()
  public itemOverviewStateModule?: ItemOverviewStateModule;

  @ApiModelProperty()
  public newsOverviewStateModule?: NewsOverviewStateModule;

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
  public bodyTextExpandedModule?: BodyTextExpandedModule;

  @ApiModelProperty()
  public notYetImplemented?: NotYetImplemented;

  @ApiModelProperty()
  public toggleModule?: ToggleModule;

  @ApiModelProperty()
  public expandablePanel?: ExpandablePanel;

  @ApiModelProperty()
  public newsletterModule?: NewsletterModule;

  @ApiModelProperty()
  public navbarSearchCategory?: NavbarSearchCategory;

  @ApiModelProperty()
  public navbarSearchItem?: NavbarSearchItem;

  @ApiModelProperty()
  public faqOverviewModule?: FAQOverviewModule;

  @ApiModelProperty()
  public tabs?: TabsModule;

  @ApiModelProperty()
  public productLineReturn?: ProductLineOverviewModule;

  @ApiModelProperty()
  public moreProducts?: MoreProducts;

  @ApiModelProperty()
  public productDetailHeader?: ProductDetailHeader;

  @ApiModelProperty()
  public productLineOverviewModel?: ProductLineOverviewCard;

  @ApiModelProperty()
  public signUpModule?: SignUpModule;

  @ApiModelProperty()
  public productLineStoryOverviewModule?: ProductLineOverviewModule;
  @ApiModelProperty()
  public ContactForm?: ContactForm;

  @ApiModelProperty()
  public relatedLinksModule?: RelatedLinksModule;

  @ApiModelProperty()
  public loginModule?: LoginModule;

  @ApiModelProperty()
  public productLineSingleModule?: ProductLineSingleModule;

  @ApiModelProperty()
  public productOverviewSimpleModule?: ProductOverviewSimpleModule;
}
