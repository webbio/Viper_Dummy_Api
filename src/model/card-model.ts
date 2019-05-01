import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { buttonCTA } from "./button-cta";
import { CardLabel } from "./card-label";
import { Image } from "./image";

export class CardModel extends WordPressPostModule {
  @ApiModelProperty()
  public picture: Image;
  @ApiModelProperty()
  public category: string;
  @ApiModelProperty({ type: [CardLabel] })
  public cardLabels: CardLabel[];
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public buttonText: string;
  @ApiModelProperty()
  public URL: string;
}
