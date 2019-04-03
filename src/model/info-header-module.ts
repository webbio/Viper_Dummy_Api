import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";

export class InfoHeader extends WordPressPostModule {
  @ApiModelProperty()
  public titleText: string;
  @ApiModelProperty()
  public bodyText: string;
  @ApiModelProperty()
  public buttonText: string;
  @ApiModelProperty()
  public imageURL: string;
  @ApiModelProperty()
  public align: string;
  @ApiModelProperty()
  public bgcolor: string;
}

export const generateDummyInfoHeaderModule = (): InfoHeader => {
  return {
    titleText: "Nieuwtjes",
    bodyText:
      "Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus convallis.",
    buttonText: "Terug naar home",
    align: "center",
    bgcolor: "#F5FAFA",
    imageURL: "",
    id: uuid(),
    name: "infoHeaderModule",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
