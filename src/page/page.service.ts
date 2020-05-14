import { Injectable } from "@nestjs/common";
import { PageModel } from "./page.model";
import * as uuid from "uuid";
import * as _ from "lodash";
import * as URI from "urijs";
import { generateDummyMainHeaderModule } from "src/model/welcome-module";
import { generateDummyNavBarModule } from "src/model/nav-bar-module";
import { generateDummyCTAModuleHomePage1, generateDummyCTAModuleHomePage2 } from "src/model/cta-module";
import { generateDummyInfoHeaderModule, generateDummyInfoHeaderModule2 } from "src/model/info-header-module";
import {
  generateBodyTextModule,
  generateBodyTextModuleAboutUs,
  generateProductLineStorySingleBodyTextHtml,
  generateProductLineStorySingleBodyTextHtml2,
} from "src/model/bodytext-module";
import { generateDummyFooterModule } from "src/model/footer-component";
import {
  generateDummyInstagramWallModule,
  generateDummyInstagramWallModuleContactPage,
} from "src/model/instagram-wall";
import { generateDummyContactModule } from "src/model/contact-module";
import { generateDummyOurTeamModule } from "src/model/our-team-module";
import { generateDummySalePointModule } from "src/model/sale-point-module";
import { generateBodyTextExpandedModule } from "src/model/bodytext-expanded-module";
import { generateNotYetImplemented } from "src/model/not-yet-implemented-module";

import {
  generateDummyRelatedProductsSlider,
  generateDummyRelatedProductsSlider2,
  generateDummyRelatedProductsSliderNoCurveBackground,
} from "src/model/related-products-slider";
import { generateDummyGallerySliderModule } from "src/model/gallery-slider";
import { generateDummyNewsletterModule } from "src/model/newsletter-module";
import { generateDummyRecipeDetailModule } from "src/model/recipe-detail-module";
import { generateDummyFaqModule } from "src/model/faq-overview-module";
import { generateDummyMoreProducts } from "src/model/more-products";
import { generateDummyProductDetailHeader } from "src/model/product-detail-header";
import { generateProductLineSingleModule } from "src/model/product-line-single-module";
import {
  generateProductOverviewSimpleModule,
  generateProductOverviewSimpleModuleCurvePatternBottom,
} from "src/model/product-overview-simple-module";
import { generateDummyRelatedLinksModule } from "src/model/related-links-module";
import { generateProductLineStoryOverviewModule } from "src/product-line-overview/product-line-generator";
import { generateDummyItemOverviewData } from "src/model/item-overview-module";
import { generateDummyNewsOverviewData } from "src/model/news-overview-module";
import {
  generateDummyFeaturedItemModule,
  generateDummyFeaturedItemModuleNoPattern,
  generateDummyFeaturedItemModuleSimple,
  generateDummyFeaturedItemModuleNoPatternCurveWhite,
  generateDummyFeaturedItemModuleLightBackground,
} from "src/model/featured-item";
import { generateDummyNotFoundModule } from "src/model/not-found-module";
import { generateDummyLoginModule } from "src/model/login";
import { generateDummySignUpModule } from "src/model/sign-up";
import { generateDummyBusinessOverviewData } from "src/model/business-overview-module";
import { generateDummyTabs } from "src/model/tab-module";
import { ToggleModule, generateDummyToggleModule } from "src/model/toggle-module";

@Injectable()
export class PageService {
  private pageList: PageModel[] = [
    {
      blogId: uuid(),
      meta: {
        title: "Homepage",
        content: "The landing page of the webpage",
        description: "The landing page of the webpage",
      },
      data: {
        permalink: "/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyMainHeaderModule(),
          generateDummyCTAModuleHomePage1(),
          generateDummyRelatedProductsSlider("Gerelateerde Producten"),
          generateDummyInstagramWallModule(),
          generateDummyCTAModuleHomePage2(),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Product line overview",
        content: "Product line overview",
        description: "Description of the page",
      },
      data: {
        permalink: "/product-line-overview/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule(
            "Onze productlijnen",
            "Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.",
            "center",
            "",
            "",
            "Meer Over Japan Moderne Keuken",
            "/product-line-single",
            "Terug naar home",
            "/"
          ),
          generateProductLineStoryOverviewModule(),
          generateDummyRelatedProductsSlider("ONZE JAPANSE PRODUCTEN"),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Product line single",
        content: "Product line single",
        description: "Description of page",
      },
      data: {
        permalink: "/product-line-single/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule(
            "JAPAN MODERNE KEUKEN",
            "Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.",
            "center",
            "",
            "",
            "Meer Over Japan Moderne Keuken",
            "/product-line-story-single",
            "Terug naar home",
            "/"
          ),
          generateProductLineSingleModule(),
          generateDummyFeaturedItemModule("Gerelateerde recepten"),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Product line story single",
        content: "Product line story single",
        description: "Description of page",
      },
      data: {
        permalink: "/product-line-story-single/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule2(
            "Japan Moderne Keuken",
            "Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.",
            "right",
            "https://d2ddoduugvun08.cloudfront.net/items/2E0z1A2O210L0G3w140J/Image%202019-05-24%20at%2011.51.39%20AM.png?X-CloudApp-Visitor-Id=3342233&v=3a301060",
            "",
            "Download boekje",
            "/product-line-single",
            "Terug naar home",
            "/"
          ),
          generateProductLineStorySingleBodyTextHtml(),
          generateDummyRelatedProductsSlider2("ONZE JAPANSE PRODUCTEN"),
          generateProductLineStorySingleBodyTextHtml2(),

          generateDummyGallerySliderModule(),
          generateDummyCTAModuleHomePage2(),
          generateDummyFeaturedItemModule("Gerelateerde recepten"),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Product group",
        content: "Product group",
        description: "Description of page",
      },
      data: {
        permalink: "/product-group/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule(
            "Noedels",
            "Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.",
            "center",
            "",
            "",
            "",
            "",
            "",
            ""
          ),
          generateProductOverviewSimpleModuleCurvePatternBottom(),
          generateDummyToggleModule(),
          generateDummyFeaturedItemModuleNoPattern("Recepten met Noedels"),
          generateDummyRelatedProductsSlider("ONZE JAPANSE PRODUCTEN"),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Product Single",
        content: "Product Single",
        description: "Description of page",
      },
      data: {
        permalink: "/product-single/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyProductDetailHeader(),
          generateDummyTabs(),
          generateDummyMoreProducts(),
          generateDummyFeaturedItemModuleSimple("Recepten met Bruine Rijstnoedels"),
          generateDummyRelatedProductsSliderNoCurveBackground("Gerelateerde Producten"),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "News Overview",
        content: "News Overview",
        description: "Description of page",
      },
      data: {
        permalink: "/news-overview/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule(
            "Nieuwtjes",
            "Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.",
            "center",
            "",
            "center",
            "",
            "",
            "Terug naar home",
            "/"
          ),
          generateDummyNewsOverviewData(),
          generateDummyRelatedProductsSlider("Gerelateerde Producten", true),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "News Single",
        content: "News Single",
        description: "Description of page",
      },
      data: {
        permalink: "/news-single/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule2(
            "Gezonde snack? Probeer onze nieuwe snackmixen!",
            "",
            "left",
            "https://www.berkeleywellness.com/sites/default/files/field/image/iStock-919666108-2_field_img_intro_774_500.jpg",
            "left",
            "",
            "",
            "Terug naar Nieuwtjes",
            "/news-overview"
          ),
          generateBodyTextExpandedModule(),
          generateDummyFeaturedItemModuleNoPatternCurveWhite("Bekijk ook"),
          generateDummyRelatedProductsSlider("Gerelateerde Producten"),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Recipe overview",
        content: "Recipe overview",
        description: "Description of page",
      },
      data: {
        permalink: "/recipe-overview/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule(
            "Recipes",
            "Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.",
            "center",
            "",
            "center",
            "",
            "",
            "Terug naar home",
            "/"
          ),
          generateDummyItemOverviewData(),
          generateDummyRelatedProductsSlider("Gerelateerde Producten", true),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Recipe Single",
        content: "Recipe Single",
        description: "Description of page",
      },
      data: {
        permalink: "/recipe-single/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyRecipeDetailModule(),
          generateDummyFeaturedItemModuleNoPatternCurveWhite("Vergelikbare recepten"),
          generateDummyRelatedProductsSlider("Gerelateerde Producten"),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "FAQ Overview",
        content: "FAQ Overview",
        description: "Description of page",
      },
      data: {
        permalink: "/faq-overview/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule(
            "Alle veelgestelde vragen",
            "Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.",
            "center",
            "",
            "",
            "",
            "",
            "Terug naar home",
            "/"
          ),
          generateDummyFaqModule(),
          generateDummyRelatedProductsSlider("Gerelateerde Producten"),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "About Us",
        content: "About Us",
        description: "Description of page",
      },
      data: {
        permalink: "/about-us/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule2(
            "Ontmoet het team achter Terrasana",
            "",
            "right",
            "https://d2ddoduugvun08.cloudfront.net/items/2E0z1A2O210L0G3w140J/Image%202019-05-24%20at%2011.51.39%20AM.png?X-CloudApp-Visitor-Id=3342233&v=3a301060",
            "right",
            "",
            "",
            "Terug naar home",
            "/"
          ),
          generateBodyTextModuleAboutUs(
            "Bij ons weet je niet alleen zeker dat de producten écht biologisch zijn, maar ook dat we alles met de grootste zorg uitkiezen en samenstellen. We hebben aandacht voor kwaliteit, natuur, milieu, smaak en productiewijze. We zijn altijd op zoek naar de mooiste en meest verantwoorde ingrediënten. Onze medewerkers weten wat ze in handen hebben en bereiden met hart en ziel veel zelf. Geen poespas maar pure en eerlijke producten."
          ),
          generateDummyOurTeamModule(),
          generateDummyFeaturedItemModuleLightBackground("Heerlijke recepten!"),
          generateDummyRelatedProductsSlider("Gerelateerde Producten"),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Contact",
        content: "Contact",
        description: "Description of page",
      },
      data: {
        permalink: "/contact/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule(
            "Contact met terrasana",
            "",
            "right",
            "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/Screenshot+2019-05-10+at+16.19.17.jpg",
            "right",
            "",
            "",
            "Terug",
            "/"
          ),
          generateDummyContactModule(),
          generateDummySalePointModule(),
          generateDummyRelatedLinksModule(),
          generateDummyInstagramWallModuleContactPage(),
          generateDummyCTAModuleHomePage2(),
          generateDummyNewsletterModule(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Business",
        content: "Business",
        description: "Description of page",
      },
      data: {
        permalink: "/business/",
        modules: [
          generateDummyNavBarModule(),
          generateDummyInfoHeaderModule(
            "DOWNLOADS",
            "Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.",
            "center",
            "",
            "",
            "",
            "",
            "",
            ""
          ),
          generateDummyBusinessOverviewData(),
          generateDummyFooterModule(),
        ],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Business Login",
        content: "Business Login",
        description: "Description of page",
      },
      data: {
        permalink: "/business-login/",
        modules: [generateDummyNavBarModule(), generateDummyLoginModule()],
      },
    } as PageModel,
    {
      blogId: uuid(),
      meta: {
        title: "Business New Account",
        content: "Business New Account",
        description: "Description of page",
      },
      data: {
        permalink: "/business-new-account/",
        modules: [generateDummyNavBarModule(), generateDummySignUpModule()],
      },
    } as PageModel,
  ];

  private notFound: PageModel = {
    blogId: uuid(),
    meta: {
      title: "Not Found",
      content: "Not Found",
      description: "Description of page",
    },
    data: {
      permalink: "/not-found/",
      modules: [generateDummyNavBarModule(), generateDummyNotFoundModule(), generateDummyFooterModule()],
    },
  } as PageModel;

  public getWordPressControls(): PageModel[] {
    return this.pageList;
  }

  public getPageByRoute(request: Request): PageModel {
    debugger;
    const path = request.url;

    const findKeyWord = path.indexOf("post?page=");

    if (!findKeyWord) return this.notFound;

    const removePost = path.split("post?page=")[1];
    const addSlashToFront = removePost[0] !== "/" ? `/${removePost}` : removePost;
    const addSlashToBack =
      addSlashToFront[addSlashToFront.length - 1] !== "/" ? `${addSlashToFront}/` : addSlashToFront;

    const page = _.find(this.pageList, (page: PageModel) => {
      return _.isEqual(page.data.permalink, addSlashToBack);
    });

    if (!page) {
      return this.notFound;
    }

    return page;
  }
}
