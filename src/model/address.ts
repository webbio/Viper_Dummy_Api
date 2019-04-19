import { ApiModelProperty } from "@nestjs/swagger";

export class Address{
    @ApiModelProperty()
    public shopName?: string;
    @ApiModelProperty()
    public street?: string;
    @ApiModelProperty()
    public city?: string;
    @ApiModelProperty()
    public postalCode?: string;
    @ApiModelProperty()
    public houseNumber?: number;

  }