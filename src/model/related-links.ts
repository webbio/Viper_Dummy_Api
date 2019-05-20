import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { Link } from './link';

export class RelatedLinks {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public content: string;
  @ApiModelProperty()
  public link: Link;
}

export const generateDummyRelatedLinksModule = (): RelatedLinks[] => [
  {
    title: 'Onze producte n',
    content: 'Bekijk onze pure & overheerlijke producten!',
    link: { content: 'Bekijk alle producten', route: '/' },
  },
  {
    title: 'Heerlijke recepten',
    content:
      'Bekijk onze verrukkelijke recepten. Natuurlijk gemaakt met Terrasana producten.',
    link: { content: 'Bekijk alle recepten', route: '/' },
  },
  {
    title: 'Over ons',
    content:
      'Lees ons verhaal en zie wie er samen hard werken aan een bio-wereld!',
    link: { content: 'Lees het verhaal', route: '/' },
  },
  {
    title: 'DOWNLOADS',
    content:
      'Bent u een verkoper van Terrasana producten? Download hier alle productinformatie.',
    link: { content: 'Alle downloads', route: '/' },
  },
];
