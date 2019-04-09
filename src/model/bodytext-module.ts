import { ApiModelProperty } from "@nestjs/swagger";
import { WordPressPostModule } from "./wordpress-post-module";
import uuid = require("uuid");

export class BodyTextModule extends WordPressPostModule {
  @ApiModelProperty()
  public html: string;
}

export const generateBodyTextModule = (): BodyTextModule => {
  return {
    html: `<p>Hallo</p>
<p><strong>Test HTML</strong></p>
<p>Dit is cool!</p>
<p><img src="https://static.ah.nl/image-optimization/static/product/AHI_434d50323137353938_3_200x200_JPG.JPG" alt="" width="247" height="247" /></p>`,
    id: uuid(),
    name: "bodyTextModule",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
