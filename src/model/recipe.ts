import { ApiModelProperty } from "@nestjs/swagger";

export class Recipe {
  @ApiModelProperty()
  public numPeople: string;

  @ApiModelProperty()
  public time: string;

  @ApiModelProperty()
  public content: string;

  @ApiModelProperty()
  public imageUrl: string;

  @ApiModelProperty()
  public category: string;

  @ApiModelProperty()
  public buttonText: string;

  @ApiModelProperty()
  public link: string;
}
