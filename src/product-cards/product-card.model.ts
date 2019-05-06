import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { SidebarModule } from "src/model/sidebar-module";
import { ProductOverview } from "src/model/product-overview";

export class ProductCardsFilter extends WordPressPostModule {
  @ApiModelProperty({ type: [ProductOverview] })
  public productOverview?: ProductOverview[];
  @ApiModelProperty()
  public search?: string;
}
