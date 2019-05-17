import { ApiModelProperty } from "@nestjs/swagger";
import { NavbarSearchItem } from "./navbar-search-item";

export class NavbarSearchCategory{
    @ApiModelProperty()
    public name?: string;
  @ApiModelProperty({ type: [NavbarSearchItem]})
    public items?: NavbarSearchItem[];

  }