import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { CardModel } from "src/model/card-model";

export class CardPaginationReturn extends WordPressPostModule {
  @ApiModelProperty({ type: [CardModel] })
  public cards: CardModel[];
  @ApiModelProperty()
  public totalItems: number;
}
