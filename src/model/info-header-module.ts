import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';

export class InfoHeaderModule extends WordPressPostModule {
  @ApiModelProperty()
  public titleText: string;
  @ApiModelProperty()
  public bodyText?: string;
  @ApiModelProperty()
  public backButtonText: string;
  @ApiModelProperty()
  public backButtonURL: string;
  @ApiModelProperty()
  public imageURL?: string;
  @ApiModelProperty()
  public htmlArea?: string;
  @ApiModelProperty()
  public align: string;
  @ApiModelProperty()
  public imageAlign?: string;
  @ApiModelProperty()
  public bgcolor: string;
  @ApiModelProperty()
  public buttonLinkText: string;
  @ApiModelProperty()
  public buttonLinkURL: string;
}

export const generateDummyInfoHeaderModule = (title: string): InfoHeaderModule => {
         return {
           titleText: title,
           bodyText:
             'Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.',
           backButtonText: 'Terug naar home',
           backButtonURL: '/',
           buttonLinkURL: '/',
           htmlArea: "<h3>HTML area!</h3>",
           buttonLinkText: 'Download baekje',
           align: 'right',
           bgcolor: '#FFFFFF',
           imageAlign: 'right',
           imageURL: 'https://dummyimage.com/360x265/000/fff',
           id: uuid(),
           name: 'infoHeaderModule',
           bottomMargin: '18px',
           topMargin: '',
         };
       };
