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
  getCategories(@Query() query) {
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
  getProducts(@Query() query) {
    const cards = this.pageService.getProducts(query.filter);
    return cards;
  }

  @ApiImplicitQuery({
    name: "filters",
    description: "search by cardName",
    required: false,
    type: String
  })
  @Get("/search")
  searchProduct(@Query() query) {
    const cards = this.pageService.searchProducts(query.filter);
    return cards;
  }
  /*  @Get()
  getSidebar() {
    const sidebar = this.pageService.getSidebarData();
    return sidebar;
  }*/
}
