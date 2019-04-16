import { ApiModelProperty } from "@nestjs/swagger";

export class ourTeamCards{
    @ApiModelProperty()
    public link?: string;
    @ApiModelProperty()
    public title?: string;
    @ApiModelProperty()
    public image?: string;
    @ApiModelProperty()
    public content?: string;
    @ApiModelProperty()
    public cardVariant?: any;
    @ApiModelProperty()
    public position?: string;
    @ApiModelProperty()
    public social?: boolean;
    @ApiModelProperty()
    public category?: string;
    @ApiModelProperty()
    public info?: any;
    @ApiModelProperty()
    public button?: any;
    @ApiModelProperty()
    public modifyClass?: any;
    @ApiModelProperty()
    public instagram?: boolean;
  }
