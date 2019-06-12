import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { MetaData } from "src/model/meta-data";

export class PageModel {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public route: string;

  @ApiModelProperty({ type: [WordPressPostModule] })
  public wordPressPostModules: WordPressPostModule[];

  @ApiModelProperty()
  public metaData: MetaData;
}
