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

export const generateDummyInfoHeaderModule = (
  title: string,
  bodyText: string,
  align: string,
  imageURL: string,
  imageAlign: string,
  buttonLinkText: string,
  buttonLinkURL: string,
  backButtonText: string,
  backButtonURL:  string,
): InfoHeaderModule => {
  return {
    titleText: title,
    bodyText,
    backButtonText,
    backButtonURL,
    buttonLinkURL,
    htmlArea: '',
    buttonLinkText,
    align,
    bgcolor: '#FFFFFF',
    imageAlign,
    imageURL,
    id: uuid(),
    name: 'infoHeaderModule',
    bottomMargin: '0px',
    topMargin: '0px',
  };
};
