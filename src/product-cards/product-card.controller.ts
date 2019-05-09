import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete
} from "@nestjs/common";
import { ProductCardService } from "./product-card.service";

import { ApiUseTags, ApiImplicitQuery } from "@nestjs/swagger";

@ApiUseTags("product-card")
@Controller("product-card")
export class ProductCardController {
  constructor(private readonly pageService: ProductCardService) {}

  @ApiImplicitQuery({
    name: "filter",
    description: "Filter by category",
    required: false,
    type: String
  })
  @Get("/categories")
  searchCategories(@Query() query) {
    const cards = this.pageService.getCategories(query.filter);
    return cards;
  }
  @ApiImplicitQuery({
    name: "filter",
    description: "Filter by sub cateogry",
    required: false,
    type: String
  })
  @Get("/products")
  searchProducts(@Query() query) {
    const cards = this.pageService.getProducts(query.filter);
    return cards;
  }

  @ApiImplicitQuery({
    name: "filters",
    description: "delete by cardName",
    required: false,
    type: String
  })
  @Get("/remove")
  removeCards(@Query() query) {
    this.pageService.removeFilter(query.filters);
  }
  /*  @Get()
  getSidebar() {
    const sidebar = this.pageService.getSidebarData();
    return sidebar;
  }*/
}
