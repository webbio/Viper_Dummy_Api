import {
  WordPressPostModule,
  paddingDesktop,
  paddingMobile,
} from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { RelatedLinks, generateDummyRelatedLinks } from './related-links';

export class RelatedLinksModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty({ type: [RelatedLinks] })
  public links: RelatedLinks[];
}

export const generateDummyRelatedLinksModule = (): RelatedLinksModule => {
  return {
    title: 'Handige links',
    links: generateDummyRelatedLinks(),
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'RelatedLinksModule',
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
  };
};
