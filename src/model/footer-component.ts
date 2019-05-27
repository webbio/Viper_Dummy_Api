import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { footerSection } from './footer-section';
import { Link } from './link';

export class FooterModule extends WordPressPostModule {
  @ApiModelProperty({ type: [footerSection] })
  public footerSections: footerSection[];
  @ApiModelProperty({ type: [Link] })
  public footerLinks: Link[];
  @ApiModelProperty()
  public logo: string;
}

export const generateDummyFooterModule = (): FooterModule => {
  return {
    footerSections: [
      {
        title: 'Onze producten',
        links: [
          { content: 'Triangle', route: 'product-single' },
          { content: 'Latte', route: 'product-single' },
          { content: 'Notenpasta', route: 'product-single' },
          { content: 'Row superfood', route: 'product-single' },
          { content: 'Mideterrane keuken', route: 'product-single' },
          { content: 'Japan moderne keuken', route: 'product-single' },
        ],
      },
      {
        title: 'Terrasana',
        links: [
          { content: 'Over ons', route: 'about-us' },
          { content: 'Nieuws', route: 'news-overview' },
          { content: 'FAQ', route: 'faq-overview' },
          { content: 'Alle producten', route: 'product-line-overview' },
          { content: 'Recepten', route: 'recipe-overview' },
        ],
      },
      {
        title: 'Koken met Terrasana',
        links: [
          { content: 'Raw Superfood Recepten', route: 'recipe-single' },
          { content: 'RawSuperfood Smoothies', route: 'recipe-single' },
          { content: 'Ontbijt', route: 'recipe-single' },
          { content: 'Voorgerecht', route: 'recipe-single' },
          { content: 'Soepen', route: 'recipe-single' },
          { content: 'Pannenkoeken', route: 'recipe-single' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { content: 'Verkooppunten', route: 'about-us' },
          { content: 'Direct contact', route: 'contact' },
          { content: 'Zakelijk', route: 'business' },
        ],
      },
    ],
    footerLinks: [
      {
        content: 'Privacy policy',
        route: '',
      },
      {
        content: 'Algemene voorwaarden',
        route: '',
      },
      {
        content: 'Disclaimer',
        route: '',
      },
    ],
    logo:
      'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/footergroup.svg',
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'FooterModule',
  };
};
