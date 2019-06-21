import { ApiModelProperty } from '@nestjs/swagger';
import { Link } from './link';

export class SidebarBox {
  @ApiModelProperty()
  public usefullLinksTitle?: string;
  @ApiModelProperty({ type: [Link] })
  public usefullLinks?: Link[];
  @ApiModelProperty()
  public propertiesTitle?: string;
  @ApiModelProperty()
  public properties?: string[];
}

export const generateDummySidebarBox = (): SidebarBox => {
  return {
    usefullLinksTitle: 'Handige links',
    usefullLinks: [
      { content: 'Alle nieuwtjes', route: '/' },
      { content: 'Alle nieuwtjes', route: '/' },
      { content: 'Alle nieuwtjes', route: '/' },
    ],
    propertiesTitle: 'eigenschappen',
    properties: [
      'Proefdiervrij',
      'Proefdiervrij',
      'Proefdiervrij',
      'Proefdiervrij',
      'Proefdiervrij',
      'Proefdiervrij',
    ],
  };
};
