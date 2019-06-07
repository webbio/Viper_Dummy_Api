import {
  WordPressPostModule,
  paddingDesktop,
  paddingMobile,
} from './wordpress-post-module';
import { ApiModelProperty } from '@nestjs/swagger';
import { Link } from './link';

export class LoginModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public content: string;
  @ApiModelProperty()
  public button: Link;
  @ApiModelProperty()
  public link: Link;
}

export const generateDummyLoginModule = (): LoginModule => {
  return {
    title: 'TERRASANA ZAKELIJKE LOGIN',
    content:
      'Aenean id lorem eleifend, malesuada arcu a, fringilla mauris. Pellentesque dolor lacus, luctus.',
    button: { content: 'Verzenden', route: '/' },
    link: { content: 'Nieuw account aanmaken', route: '/' },
    id: '9',
    name: 'LoginModule',
    topMargin: '0px',
    bottomMargin: '0px',
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingMedium,
      mobilePadding: paddingMobile.mobilePaddingMedium,
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
  };
};
