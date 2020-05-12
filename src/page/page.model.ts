import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { IWPPageMeta } from "src/model/meta-data";

export class PageModel {
  @ApiModelProperty()
  public data?: IWPData;
  @ApiModelProperty()
  public meta?: IWPPageMeta;
  @ApiModelProperty()
  public taxonomies?: IWPPageTaxonomies[] | [];
  @ApiModelProperty()
  public type?: string;
}

export class IWPModule {
  @ApiModelProperty()
  public acf_fc_layout?: string;
  @ApiModelProperty()
  public setMargins?: any;
  @ApiModelProperty()
  public spacing?: IWPSpacing;
  @ApiModelProperty()
  public useDefault?: boolean;
  @ApiModelProperty()
  public data?: any;
}

export class IWPData {
  @ApiModelProperty()
  public post?: IWPPost;
  @ApiModelProperty()
  public permalink?: string;
  @ApiModelProperty({ type: [IWPModule] })
  public modules?: IWPModule[];
}

export class IWPSpacing {
  @ApiModelProperty()
  public distancePaddingTop?: IWPSpacingOptionsArray | IWPSpacingOptions;
  @ApiModelProperty()
  public distanceMarginTop?: IWPSpacingOptionsArray | IWPSpacingOptions;
  @ApiModelProperty()
  public distancePaddingBottom?: IWPSpacingOptionsArray | IWPSpacingOptions;
  @ApiModelProperty()
  public distanceMarginBottom?: IWPSpacingOptionsArray | IWPSpacingOptions;
}

export type IWPSpacingOptions = "none" | "default" | "small" | "large";
export type IWPSpacingOptionsArray = ["none"] | ["default"] | ["small"] | ["large"];

export class IWPPost {
  @ApiModelProperty()
  public ID: number;
  @ApiModelProperty()
  public post_author: string;
  @ApiModelProperty()
  public post_date: string;
  @ApiModelProperty()
  public post_date_gmt: string;
  @ApiModelProperty()
  public post_content: string;
  @ApiModelProperty()
  public post_title: string;
  @ApiModelProperty()
  public post_excerpt: string;
  @ApiModelProperty()
  public post_status: string;
  @ApiModelProperty()
  public comment_status: string;
  @ApiModelProperty()
  public ping_status: string;
  @ApiModelProperty()
  public post_password: string;
  @ApiModelProperty()
  public post_name: string;
  @ApiModelProperty()
  public to_ping: string;
  @ApiModelProperty()
  public pinged: string;
  @ApiModelProperty()
  public post_modified: string;
  @ApiModelProperty()
  public post_modified_gmt: string;
  @ApiModelProperty()
  public post_content_filtered: string;
  @ApiModelProperty()
  public post_parent: number;
  @ApiModelProperty()
  public guid: string;
  @ApiModelProperty()
  public menu_order: number;
  @ApiModelProperty()
  public post_type: string;
  @ApiModelProperty()
  public post_mime_type: string;
  @ApiModelProperty()
  public comment_count: string;
  @ApiModelProperty()
  public filter: string;
}

export class IWPPageTaxonomies {
  @ApiModelProperty()
  public term_id?: number;
  @ApiModelProperty()
  public name?: string;
  @ApiModelProperty()
  public slug?: string;
  @ApiModelProperty()
  public term_group?: number;
  @ApiModelProperty()
  public term_taxonomy_id?: number;
  @ApiModelProperty()
  public taxonomy?: string;
  @ApiModelProperty()
  public description?: string;
  @ApiModelProperty()
  public parent?: number;
  @ApiModelProperty()
  public count?: number;
  @ApiModelProperty()
  public filter?: string;
  @ApiModelProperty()
  public term_order?: string;
}
