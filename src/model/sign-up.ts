import {
  WordPressPostModule,
  paddingDesktop,
  paddingMobile,
} from './wordpress-post-module';
import { ApiModelProperty } from '@nestjs/swagger';
import { Link } from './link';
import { Placeholder } from './placeholder-fields';

export class SignUpModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public content: string;
  @ApiModelProperty()
  public button: Link;
  @ApiModelProperty()
  public link: Link;
  @ApiModelProperty()
  public options: string[];
  @ApiModelProperty({ type: Placeholder })
  public placeholderField?: Placeholder;
}

export const generateDummySignUpModule = (): SignUpModule => {
  return {
    title: 'Nieuw account aanmaken',
    content:
      'Aenean id lorem eleifend, malesuada arcu afringilla mauris. Pellentesque dolor lacus, luctus.',
    button: { content: 'Account aanmaken', route: '/business-login' },
    link: { content: 'Nieuw account aanmaken', route: '/business-new-account' },
    options: ['Nederlands', 'Engels', 'Frans'],
    id: '9',
    name: 'SignUpModule',
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
    placeholderField: {
      companyName: 'Bedrijfsnaam',
      password: 'Wachtwoord',
      confirmPassword: 'Herhaal wachtwoord',
      email: 'E-mailadres',
      language: 'Selecteer je taalvoorkeur',
    },
  };
};
