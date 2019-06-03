import { ApiModelProperty } from '@nestjs/swagger';
import { WordPressPostModule } from 'src/model/wordpress-post-module';

export class ProductLineOverviewCard {
  @ApiModelProperty()
  public link: string;

  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public image: string;

  @ApiModelProperty()
  public content: string;

  @ApiModelProperty()
  public buttonText: string;

  @ApiModelProperty()
  public categoryDetail: string;

  @ApiModelProperty()
  public diet: string;
}

export class ProductLineOverviewModule extends WordPressPostModule {
  @ApiModelProperty({ type: [ProductLineOverviewCard] })
  public productsLine: ProductLineOverviewCard[];
  @ApiModelProperty({ type: [String] })
  public categories: string[];
  @ApiModelProperty({ type: [String] })
  public diets: string[];
}
