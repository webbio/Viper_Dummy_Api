import { WordPressPostModule } from "./wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { ExpandablePanel } from "./expandable-panel";

export class ToggleModule {
  @ApiModelProperty({ type: [ExpandablePanel] })
  public items: ExpandablePanel[];

  @ApiModelProperty()
  public title: string;
}

