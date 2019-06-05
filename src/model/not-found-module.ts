import uuid = require('uuid');
import { WordPressPostModule } from './wordpress-post-module';
import { ApiModelProperty } from '@nestjs/swagger';

export class NotFoundModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public text: string;
  @ApiModelProperty()
  public backButtonText: string;
  @ApiModelProperty()
  public homeButtonText: string;
}

export const generateDummyNotFoundModule = (): NotFoundModule => {
  return {
    id: uuid(),
    title: 'Oeps, er is iets mis gegaan',
    text: 'Aenean id lorem eleifend, malesuada arcu afringilla mauris. Pellentesque dolor lacus, luctus.',
    backButtonText: 'Terug naar vorige pagina',
    homeButtonText: 'Naar home',
    topMargin: '',
    background: { backgroundColour: '#f5fafa' },
    topPadding: '120px',
    bottomPadding: '120px',
    bottomMargin: '',
    name: 'NotFoundModule',
  };
};
