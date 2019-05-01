import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { SidebarModule } from "src/model/sidebar-module";

export class ProductOverviewCardModel extends WordPressPostModule {
  @ApiModelProperty()
  public link?: string;
  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public content?: string;
  @ApiModelProperty()
  public image?: string;
  @ApiModelProperty()
  public button?: any;
  @ApiModelProperty()
  public category?: string;
  @ApiModelProperty()
  public modifyClass?: string;
  @ApiModelProperty()
  public cardVariant?: string;
}

export class ProductCardsFilterReturn extends WordPressPostModule {
  @ApiModelProperty({ type: [ProductOverviewCardModel] })
  public productOverviewCard: ProductOverviewCardModel[];
}
