import { WordPressPostModule } from "./wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { FilterOptionsModule } from "./filter-options";

export class FilterModule {
  @ApiModelProperty({ type: [FilterOptionsModule] })
  public options?: FilterOptionsModule[];
  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public max?: number;
}
