import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { SidebarModule } from "src/model/sidebar-module";

export class SidebarReturn extends WordPressPostModule {
  @ApiModelProperty()
  public search?: string;
  @ApiModelProperty({ type: [SidebarModule] })
  public sidebar: SidebarModule[];
}
