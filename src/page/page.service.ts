import { Injectable } from '@nestjs/common';
import { PageModel } from './page.model';
import * as uuid from 'uuid';
import * as _ from 'lodash';
import * as URI from 'urijs';
import { generateDummyWelcomeModule } from 'src/model/welcome-module';
import { generateDummyNavBarModule } from 'src/model/nav-bar-module';
import {
  generateDummyCTAModuleHomePage1,
  generateDummyCTAModuleHomePage2,
} from 'src/model/cta-module';
import { generateDummyInfoHeaderModule } from 'src/model/info-header-module';
import { generateBodyTextModule } from 'src/model/bodytext-module';
import { generateDummyFooterModule } from 'src/model/footer-component';
import { generateDummyInstagramWallModule } from 'src/model/instagram-wall';
import { generateDummyContactModule } from 'src/model/contact-module';
import { generateDummyOurTeamModule } from 'src/model/our-team-module';
import { generateDummySalePointModule } from 'src/model/sale-point-module';
import { generateBodyTextExpandedModule } from 'src/model/bodytext-expanded-module';
import { generateNotYetImplemented } from 'src/model/not-yet-implemented-module';
import { generateDummyNewsletterModule } from 'src/model/newsletter-module';
import { generateDummyRecipeDetailModule } from 'src/model/recipe-detail-module';
import { generateDummyFaqModule } from 'src/model/faq-overview-module';
import { generateProductLineSingleModule } from 'src/model/product-line-single-module';
import { generateProductOverviewSimpleModule } from 'src/model/product-overview-simple-module';
import { generateDummyRelatedLinksModule } from 'src/model/related-links-module';
import { generateProductLineStoryOverviewModule } from 'src/product-line-overview/product-line-generator';
import { generateDummyItemOverviewData } from 'src/model/item-overview-module';

@Injectable()
export class PageService {
  private pageList: PageModel[] = [
    {
      id: uuid(),
      route: 'terrasana.com', // still need to fill instagram module properly
      description: 'Homepage with modules',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyWelcomeModule(),
        generateDummyCTAModuleHomePage1(),
        generateNotYetImplemented('Related Products Module'),
        generateDummyInstagramWallModule(),
        generateDummyCTAModuleHomePage2(),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/product-line-overview',
      description: 'Homepage',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule(
          'Onze productlijnen',
          'Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.',
          'center',
          '',
          '',
          'Meer Over Japan Moderne Keuken',
          '/product-line-single',
          'Terug naar home',
          '/',
        ),
        generateProductLineStoryOverviewModule(),
        generateNotYetImplemented('Related Products Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/product-line-single',
      description: 'Homepage',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule(
          'Japan Moderne Keuken',
          'Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.',
          'center',
          '',
          '',
          'Meer Over Japan Moderne Keuken',
          '/product-line-single',
          'Terug naar home',
          '/',
        ),
        generateProductLineSingleModule(),
        generateNotYetImplemented('Related Recipes Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,

    {
      id: uuid(),
      route: 'terrasana.com/product-line-story-single',
      description: 'Productlijnen overzicht',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule(
          'Japan Moderne Keuken',
          'Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.',
          'center',
          '',
          '',
          'Meer Over Japan Moderne Keuken',
          '/product-line-single',
          'Terug naar home',
          '/',
        ),
        generateBodyTextModule('add dummy bodytext html'),
        generateNotYetImplemented('Related Products Module'),
        generateBodyTextModule('add dummy bodytext html'),
        generateNotYetImplemented('Picture Slider Module'),
        generateDummyCTAModuleHomePage2(), // add new CTA module for this page (always japanese products)
        generateNotYetImplemented('Related Recipe Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/product-group',
      description: 'Productgroepen',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule(
          'Downloads',
          'Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.',
          'center',
          '',
          '',
          '',
          '',
          '',
          '',
        ),
        generateProductOverviewSimpleModule(),
        generateNotYetImplemented('FAQ Module'),
        generateNotYetImplemented('Related Recipe Module'),
        generateNotYetImplemented('Related Products Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/info-header',
      description: 'InfoHeader',
      wordPressPostModules: [
        // generateDummyInfoHeaderModule('Noedels'),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/product-single',
      description: 'Product',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateNotYetImplemented('Product Single Header Module'),
        generateNotYetImplemented('Product Single Tab Module'),
        generateNotYetImplemented('Related Product Module'),
        generateNotYetImplemented('Related Recipe Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/news-overview',
      description: 'Nieuws',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule(
          'NIEUWTJES',
          'Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.',
          'center',
          '',
          '',
          '',
          '',
          'Terug naar home',
          '/',
        ),
        // main component
        generateNotYetImplemented('Related Products Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/news-single',
      description: 'Nieuws',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule(
          'Gezonde snack? Probeer onze nieuwe snackmixen!',
          '',
          'right',
          'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-1-eng-GB/FRESH_PA_i1140.jpg',
          'right',
          '',
          '',
          'Terug naar Nieuwtjes',
          '/news-overview',
        ),
        generateBodyTextExpandedModule(),
        generateNotYetImplemented('Related News Module'),
        generateNotYetImplemented('Related Products Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/recipe-overview',
      description: 'Recepten',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        // generateDummyInfoHeaderModule('Recepten'),
        generateDummyItemOverviewData(),
        generateNotYetImplemented('Recipe Overview Module'),
        generateNotYetImplemented('Related Products Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/recipe-single',
      description: 'Recepten',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateNotYetImplemented('Recipe Header Module'),
        generateDummyRecipeDetailModule(),
        generateNotYetImplemented('Related Products Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/faq-overview',
      description: 'Veelgestelde vragen',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule(
          'Alle veelgestelde vragen',
          'Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.',
          'center',
          '',
          '',
          '',
          '',
          'Terug naar home',
          '/',
        ),
        generateDummyFaqModule(),
        generateNotYetImplemented('Related Products Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/faq-single',
      description: 'Veelgestelde vragen',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        // generateDummyInfoHeaderModule('Hoe worden de noedels gemaakt?'),
        generateBodyTextModule('add dummy bodytext html'),
        generateNotYetImplemented('Related FAQ Module'),
        generateNotYetImplemented('Related Products Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/about-us',
      description: 'Informatief',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        // generateDummyInfoHeaderModule('Ontmoet het team achter terrasana?'),
        generateBodyTextModule('add dummy bodytext html'),
        generateDummyOurTeamModule(),
        generateNotYetImplemented('Related Recipes Module'),
        generateNotYetImplemented('Related Products Module'),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/contact',
      description: 'Contact',
      wordPressPostModules: [
        generateDummyNavBarModule(),
        generateDummyInfoHeaderModule(
          'Contact met terrasana',
          '',
          'right',
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/Screenshot+2019-05-10+at+16.19.17.jpg',
          'right',
          '',
          '',
          'Terug',
          '/',
        ),
        generateDummyContactModule(),
        generateDummySalePointModule(),
        generateNotYetImplemented('Related Links Module'),
        generateDummyRelatedLinksModule(),
        generateDummyInstagramWallModule(),
        generateDummyCTAModuleHomePage2(),
        generateDummyNewsletterModule(),
        generateDummyFooterModule(),
      ],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/business',
      description: 'Zakelijk',
      wordPressPostModules: [generateDummyNavBarModule()],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/business-downloads-product-line',
      description: 'Zakelijk',
      wordPressPostModules: [generateDummyNavBarModule()],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/business-downloads-product-line-detail',
      description: 'Zakelijk',
      wordPressPostModules: [generateDummyNavBarModule()],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/business-login',
      description: 'Zakelijk',
      wordPressPostModules: [generateDummyNavBarModule()],
    } as PageModel,
    {
      id: uuid(),
      route: 'terrasana.com/business-new-account',
      description: 'Zakelijk',
      wordPressPostModules: [generateDummyNavBarModule()],
    } as PageModel,
  ];

  public getWordPressControls(): PageModel[] {
    return this.pageList;
  }

  public getPageByRoute(route: string): PageModel {
    let routeToUse = route;
    if (route === '') {
      routeToUse = 'terrasana.com/';
    }
    const uri = new URI(routeToUse);

    routeToUse = uri.domain();
    routeToUse += uri.segment()[0] !== '' ? '/' + uri.segment()[0] : '';

    return _.find(this.pageList, (page: PageModel) => {
      return _.isEqual(page.route, routeToUse);
    });
  }
}
