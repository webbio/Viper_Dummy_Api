import { ApiModelProperty } from "@nestjs/swagger";

export class ContactForm{
    @ApiModelProperty()
    public email?: string;
    @ApiModelProperty()
    public name?: string;
    @ApiModelProperty()
    public privacyText?: string;
    @ApiModelProperty()
    public privacyLink?: string;

  }