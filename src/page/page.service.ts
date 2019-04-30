import { Injectable } from "@nestjs/common";
import { PageModel } from "./page.model";
import * as uuid from "uuid";
import * as _ from "lodash";
import { WelcomeModule, generateDummyWelcomeModule } from "src/model/welcome-module";
import { NavBarModule, generateDummyNavBarModule } from "src/model/nav-bar-module";
import { generateDummyCTAModuleHomePage } from "src/model/cta-module";
import { generateDummyInfoHeaderModule } from "src/model/info-header-module";
import { generateBodyTextModule, getHomepageBodyTextHtml } from "src/model/bodytext-module";
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

@Injectable()
export class PageService {
  private pageList: PageModel[] = [
    {
      id: uuid(),
      route: "https://terrasana.com/",
      description: "Homepage with modules",
      wordPressPostModules: [
        generateDummyNavBarModule() as NavBarModule,
        generateDummyWelcomeModule() as WelcomeModule,
        generateDummyCTAModuleHomePage(),
        generateNotYetImplemented("Module Name Test")
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-line-overview",
      description: "Homepage",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-line-single",
      description: "Productlijnen overzicht",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-line-story-single",
      description: "Productlijnen overzicht",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-group",
      description: "Productgroepen",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/product-single",
      description: "Product",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/news-overview",
      description: "Nieuws",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/news-single",
      description: "Nieuws",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/recipe-overview",
      description: "Recepten",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/recipe-single",
      description: "Recepten",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/faq-overview",
      description: "Veelgestelde vragen",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/faq-single",
      description: "Veelgestelde vragen",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/about-us",
      description: "Informatief",
      wordPressPostModules: [generateDummyNavBarModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/contact",
      description: "Contact",
      wordPressPostModules: [generateDummyNavBarModule()]
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
