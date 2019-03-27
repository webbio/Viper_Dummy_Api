import { ApiModel, ApiModelProperty } from "swagger-express-ts";
import { WordPressPostModule } from "../model/wordpress-post-module";

@ApiModel({
  description: "PageModel description"
})
export class PageModel {
  @ApiModelProperty({
    description: "Id of the page",
    example: ["123456789", "12345"],
    required: true
  })
  public id: string;

  @ApiModelProperty({
    description: "",
    required: true
  })
  public route: string;

  @ApiModelProperty({
    description: "Description of the page",
    required: true
  })
  public description: string;

  @ApiModelProperty({
    description: "Wordpress modules available on this page",
    required: true
  })
  public wordpressPostModules: WordPressPostModule[];
}
