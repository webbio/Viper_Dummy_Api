import { ApiModelProperty } from '@nestjs/swagger';
import { Link } from './link';

export class NewsItem {
  @ApiModelProperty()
  public image?: string;
  @ApiModelProperty()
  public content?: string;
  @ApiModelProperty()
  public link?: string;
}
export const generateDummyNews = (): NewsItem[] => {
  return [
    {
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png',
      link: '/news-single',
      content: 'Recept van de maand: freakshake met…',
    },
    {
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png',
      link: '/news-single',
      content: 'Aenean ullamcorper mi sit amet lacus accumsan...',
    },
    {
      image:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png',
      link: '/news-single',
      content: 'Duis blandit tortor a erat',
    },
  ];
};
