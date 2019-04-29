import { ApiModelProperty } from "@nestjs/swagger";

export class Phone{
    @ApiModelProperty()
    public phone?: string;
    @ApiModelProperty()
    public contactName?: string;


  }