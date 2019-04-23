import { ApiModelProperty } from "@nestjs/swagger";

export class ProductCard{
    @ApiModelProperty()
    public link?: string;
    @ApiModelProperty()
    public title?: string;
    @ApiModelProperty()
    public content?: string;
    @ApiModelProperty()
    public image?: string;
    @ApiModelProperty()
    public button?: any;
    @ApiModelProperty()
    public category?: string;

  }
 
