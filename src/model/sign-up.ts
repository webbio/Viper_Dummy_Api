import { WordPressPostModule } from './wordpress-post-module';
import { ApiModelProperty } from '@nestjs/swagger';
import { Link } from './link';

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
}

export const generateDummySignUpModule = (): SignUpModule => {
  return {
    title: 'Nieuw account aanmaken',
    content:
      'Aenean id lorem eleifend, malesuada arcu afringilla mauris. Pellentesque dolor lacus, luctus.',
    button: { content: 'Account aanmaken', route: '/' },
    link: { content: 'Nieuw account aanmaken', route: '/' },
    options: ['Nederlands', 'Engels', 'Frans'],
    id: '9',
    name: 'LoginModule',
    topMargin: '0px',
    bottomMargin: '0px',
  };
};
