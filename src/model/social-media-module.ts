import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';
import { buttonFooter } from './buttonFooter';

export class SocialMediaOptions {
  @ApiModelProperty()
  url: string;
}

export class SocialMediaSharingOptions extends SocialMediaOptions {
  @ApiModelProperty()
  title: string;
}

export class SocialMailOptions extends SocialMediaOptions {
  @ApiModelProperty()
  subject: string;
}

export class SocialFacebookOptions extends SocialMediaSharingOptions {
  @ApiModelProperty()
  hashtag?: string;
}

export class SocialLinkedinOptions extends SocialMediaSharingOptions {
  @ApiModelProperty()
  description?: string;
}
export class SocialTwitterOptions extends SocialMediaSharingOptions {
  @ApiModelProperty()
  via?: string;
  @ApiModelProperty({ type: [String] })
  hashtags?: String[];
}

export class SocialWhatsappOptions extends SocialMediaSharingOptions {
  @ApiModelProperty()
  separator?: string;
}

export class SocialPinterestOptions extends SocialMediaSharingOptions {
  @ApiModelProperty()
  media?: string;
}

export class ShareSocialMediaButtons {
  @ApiModelProperty({ required: false, type: SocialFacebookOptions })
  facebook?: SocialFacebookOptions;
  @ApiModelProperty({ required: false, type: SocialLinkedinOptions })
  linkedin?: SocialLinkedinOptions;
  @ApiModelProperty({ required: false, type: SocialMediaSharingOptions })
  email?: SocialMailOptions;
  @ApiModelProperty({ required: false, type: SocialPinterestOptions })
  pinterest?: SocialPinterestOptions;
  @ApiModelProperty({ required: false, type: SocialTwitterOptions })
  twitter?: SocialTwitterOptions;
  @ApiModelProperty({ required: false, type: SocialWhatsappOptions })
  whatsapp?: SocialWhatsappOptions;
}

export class LikeSocialMediaButtons {
  @ApiModelProperty({ required: false })
  facebook?: string;
  @ApiModelProperty({ required: false })
  linkedin?: string;
  @ApiModelProperty({ required: false })
  instagram?: string;
  @ApiModelProperty({ required: false })
  pinterest?: string;
  @ApiModelProperty({ required: false })
  twitter?: string;
  @ApiModelProperty({ required: false })
  youtube?: string;
}
