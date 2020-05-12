import { ApiModelProperty } from "@nestjs/swagger";

export class IWPPageMeta {
  @ApiModelProperty()
  public breadcrumbTitle?: string;
  @ApiModelProperty()
  public canonicalUrl?: string;
  @ApiModelProperty()
  public facebookDescription?: string;
  @ApiModelProperty()
  public facebookImage?: string;
  @ApiModelProperty()
  public facebookTitle?: string;
  @ApiModelProperty()
  public featuredImage?: string;
  @ApiModelProperty()
  public hreflang?: IWPPageMetaHrefLang[];
  @ApiModelProperty()
  public metaRobotAdvanced?: string;
  @ApiModelProperty()
  public metaRobotFollow?: number;
  @ApiModelProperty()
  public metaRobotIndex?: number;
  @ApiModelProperty()
  public seoMetaDescription?: string;
  @ApiModelProperty()
  public seoTitle?: string;
  @ApiModelProperty()
  public twitterDescription?: string;
  @ApiModelProperty()
  public twitterImage?: string;
  @ApiModelProperty()
  public twitterTitle?: string;
}

export class IWPPageMetaHrefLang {
  @ApiModelProperty()
  public lang?: string;
  @ApiModelProperty()
  public value?: string;
}
