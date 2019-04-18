import { ApiModelProperty } from "@nestjs/swagger";

export class IntagramPosts {
  @ApiModelProperty()
  public imageUrl: string;
  @ApiModelProperty()
  public title: string;
}
