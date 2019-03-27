import { WordPressPostModule } from 'src/model/wordpress-post-module';
import { ApiModelProperty } from '@nestjs/swagger';

export class PageModel {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public route: string;

  @ApiModelProperty()
  public description: string;

  @ApiModelProperty({ type: [WordPressPostModule] })
  public wordPressPostModules: WordPressPostModule[];
}
