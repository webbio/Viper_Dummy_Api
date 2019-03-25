import { ApiModel, ApiModelProperty } from "swagger-express-ts";

@ApiModel({
  description: "WordPressModel description",
  name: "WordPressModel"
})
export class WordPressModel {
  @ApiModelProperty({
    description: "Id of wordpress control",
    example: ["123456789", "12345"],
    required: true
  })
  public id: string;

  @ApiModelProperty({
    description: "",
    required: true
  })
  public name: string;

  @ApiModelProperty({
    description: "Description of wordpress control",
    required: true
  })
  public description: string;
}
