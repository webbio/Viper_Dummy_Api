import { Controller, Get, Param, Post, Body, Query } from "@nestjs/common";
import { ProductFilterService } from "./product-filter.service";

import { ApiUseTags, ApiImplicitQuery } from "@nestjs/swagger";

@ApiUseTags("product-filter")
@Controller("product-filter")
export class ProductFilterController {
  constructor(private readonly pageService: ProductFilterService) {}

  @Get()
  getSidebar() {
    const sidebar = this.pageService.getSidebarData();
    return sidebar;
  }
  /*  @ApiImplicitQuery({
    name: "category",
    description: "",
    required: false,
    type: String
  })
  
  @Get("/find")
  findFilter(@Query() query) {
    this.pageService.getFilterStatus(query.category);
  }*/
}
