import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { ProductCard } from "src/model/product-card";
import { CategoryCard } from "src/model/category-card";

/*
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
*/
