import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { SidebarModule } from "src/model/sidebar-module";
import { ProductOverview } from "src/model/product-overview";
import { ProductCard } from "src/model/product-card";
import { CategoryCard } from "src/model/categoryCard";
import { ProductLineFilterModule } from "src/model/product-line-filter-module";

export class ProductCardsFilter extends WordPressPostModule {
  @ApiModelProperty({ type: [ProductCard] })
  public productCard: ProductCard[];
  @ApiModelProperty({ type: [CategoryCard] })
  public categoryCard: CategoryCard[];
  @ApiModelProperty()
  public sidebar: ProductLineFilterModule;
  @ApiModelProperty()
  public search?: string;
}
