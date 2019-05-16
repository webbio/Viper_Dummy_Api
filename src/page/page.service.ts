import { Injectable } from "@nestjs/common";
import { PageModel } from "./page.model";
import * as uuid from "uuid";
import * as _ from "lodash";
import { WelcomeModule, generateDummyWelcomeModule } from "src/model/welcome-module";
import { NavBarModule, generateDummyNavBarModule } from "src/model/nav-bar-module";
import { generateDummyCTAModuleHomePage1, generateDummyCTAModuleHomePage2 } from "src/model/cta-module";
import { generateDummyInfoHeaderModule } from "src/model/info-header-module";
import { generateBodyTextModule } from "src/model/bodytext-module";
import { generateDummyFooterModule } from "src/model/footer-component";
import { generateDummyInstagramWallModule, InstagramWalllModule } from "src/model/instagram-wall";
import { generateDummyFeaturedItemModule, FeaturedItemModule } from "src/model/featured-item";
import { generateDummySocialMediaButtons } from "src/model/social-media-buttons";
import { OurTeamModule } from "src/model/our-team-module";
import { generateDummyContactModule, ContactModule } from "src/model/contact-module";
import { generateDummyOurTeamModule } from "src/model/our-team-module";
import { generateDummySalePointModule, SalePointModule } from "src/model/sale-point-module";
import { generateBodyTextExpandedModule, BodyTextExpandedModule } from "src/model/bodytext-expanded-module";
import { generateNotYetImplemented } from "src/model/not-yet-implemented-module";
import { generateDummyProductOverviewModule } from "src/model/product-overview";
import { generateProductLineStoryOverviewModule } from "src/model/product-line-story-overview-module";
import { generateDummyRelatedProductsSlider } from "src/model/related-products-slider";
import { generateDummyGallerySliderModule } from "src/model/gallery-slider";
@Injectable()
export class PageService {
  private pageList: PageModel[] = [
    {
      id: uuid(),
      route: "https://terrasana.com/",
      description: "Homepage with modules",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyWelcomeModule(),
        generateDummyCTAModuleHomePage1(),
        generateDummyRelatedProductsSlider(),
        generateDummyInstagramWallModule(),
        generateDummyCTAModuleHomePage2(),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-line-overview",
      description: "Homepage",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Onze productlijnen"),
        generateProductLineStoryOverviewModule(),
        generateNotYetImplemented("Related Products Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-line-single",
      description: "Homepage",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Japan Moderne Keuken"),
        generateNotYetImplemented("ProductLine Filter Module"),
        generateNotYetImplemented("Related Recipes Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-line-story-single",
      description: "Productlijnen overzicht",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Japan Moderne Keuken"),
        generateBodyTextModule("add dummy bodytext html"),
        generateNotYetImplemented("Related Products Module"),
        generateBodyTextModule("add dummy bodytext html"),
        generateNotYetImplemented("Picture Slider Module"),
        generateDummyCTAModuleHomePage2(), // add new CTA module for this page (always japanese products)
        generateNotYetImplemented("Related Recipe Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-group",
      description: "Productgroepen",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Noedels"),
        generateNotYetImplemented("ProductLine Filter Module"),
        generateNotYetImplemented("FAQ Module"),
        generateNotYetImplemented("Related Recipe Module"),
        generateNotYetImplemented("Related Products Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-single",
      description: "Product",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateNotYetImplemented("Product Single Header Module"),
        generateNotYetImplemented("Product Single Tab Module"),
        generateNotYetImplemented("Related Product Module"),
        generateNotYetImplemented("Related Recipe Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/news-overview",
      description: "Nieuws",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Nieuwtjes"),
        generateNotYetImplemented("News Overview Module"),
        generateNotYetImplemented("Related Products Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/news-single",
      description: "Nieuws",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Gezonde snack? Probeer onze nieuwe snackmixen!"),
        generateBodyTextExpandedModule(),
        generateNotYetImplemented("Related News Module"),
        generateNotYetImplemented("Related Products Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/recipe-overview",
      description: "Recepten",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Recepten"),
        generateNotYetImplemented("Recipe Overview Module"),
        generateNotYetImplemented("Related Products Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/recipe-single",
      description: "Recepten",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateNotYetImplemented("Recipe Header Module"),
        generateNotYetImplemented("Recipe Details Module"),
        generateNotYetImplemented("Related Products Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/faq-overview",
      description: "Veelgestelde vragen",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Alle veelgestelde vragen"),
        generateNotYetImplemented("FAQ overview Module"),
        generateNotYetImplemented("Related Products Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/faq-single",
      description: "Veelgestelde vragen",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Hoe worden de noedels gemaakt?"),
        generateBodyTextModule("add dummy bodytext html"),
        generateNotYetImplemented("Related FAQ Module"),
        generateNotYetImplemented("Related Products Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/about-us",
      description: "Informatief",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Ontmoet het team achter terrasana?"),
        generateBodyTextModule("add dummy bodytext html"),
        generateDummyOurTeamModule(),
        generateNotYetImplemented("Related Recipes Module"),
        generateNotYetImplemented("Related Products Module"),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/contact",
      description: "Contact",
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule("Contact met terrasana"),
        generateDummyContactModule(),
        generateDummySalePointModule(),
        generateNotYetImplemented("Related Links Module"),
        generateDummyInstagramWallModule(),
        generateDummyCTAModuleHomePage2(),
        generateNotYetImplemented("Newsletter Module"),
        generateDummyFooterModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/business",
      description: "Zakelijk",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/business-downloads-product-line",
      description: "Zakelijk",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/business-downloads-product-line-detail",
      description: "Zakelijk",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/business-login",
      description: "Zakelijk",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/business-new-account",
      description: "Zakelijk",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel
  ];

  public getWordPressControls(): PageModel[] {
    return this.pageList;
  }

  public getPageByRoute(route: string): PageModel {
    let routeToUse = route;
    if (route === "") {
      routeToUse = "https://terrasana.com/";
    }

    return _.find(this.pageList, (page: PageModel) => {
      return _.isEqual(page.route, routeToUse);
    });
  }
}
