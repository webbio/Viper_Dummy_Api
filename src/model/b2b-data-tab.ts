import { ApiModelProperty } from '@nestjs/swagger';
import { Link } from './link';
import { TabInformation } from './tab-information';

export class B2BDataTab {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public content: string;
  @ApiModelProperty({ type: [TabInformation] })
  public tabInformation: TabInformation[];
  @ApiModelProperty()
  public downloadTitle: string;
  @ApiModelProperty()
  public downloadContent: string;
  @ApiModelProperty({ type: [Link] })
  public downloadLinks: Link[];
}

export const generateDummyB2BDataTabs = (): B2BDataTab => {
  return {
    title: 'B2B GEGEVENS',
    content:
      'Sed vel sagittis urna. Sed congue et sapien quis sagittis. Fusce nulla mi, ornare eget sodales nec, lacinia vitae mauris. Pellentesque massa ex, sodales non justo a, elementum tempor nulla. Proin sagittis elit at ex malesuada, sed interdum nibh fermentum.',
    tabInformation: [
      {
        information: 'Artikelcode',
        detail: '270.3100',
      },
      {
        information: 'Kwaliteit',
        detail: 'BIO',
      },
      {
        information: 'Inhoud',
        detail: '250g',
      },
      {
        information: 'EAN',
        detail: '8713576282504',
      },
      {
        information: 'Land van herkomst',
        detail: 'China',
      },
    ],
    downloadTitle: 'GEBRUIK',
    downloadContent:
      'Download hier alle foto’s, video’s en prodcutinformatie als PDF!',
    downloadLinks: [
      { content: 'Download productinformatie', route: '' },
      { content: 'Download video\'s', route: '' },
      { content: 'Download foto\'s', route: '' },
      { content: 'Naar downloadpagina', route: '' },
    ],
  };
};
