import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete
} from "@nestjs/common";
import { ProductLineService } from "./product-line.service";

import { ApiUseTags, ApiImplicitQuery } from "@nestjs/swagger";

@ApiUseTags("product-card")
@Controller("product-card")
export class ProductLineController {
  constructor(private readonly pageService: ProductLineService) {}
  /*
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
  }*/

  @ApiImplicitQuery({
    name: "category",
    description: "Filter by  cateogry",
    required: false,
    type: String
  })
  @Get("/products")
  getProducts(@Query() query) {
    const cards = this.pageService.getProducts(query.category);
    return cards;
  }

  @ApiImplicitQuery({
    name: "search",
    description: "search",
    required: true,
    type: String
  })
  @Get("/search")
  searchProduct(@Query() query) {
    const products = this.pageService.searchProducts(query.search);
    return products;
  }
  /*  @Get()
  getSidebar() {
    const sidebar = this.pageService.getSidebarData();
    return sidebar;
  }*/
}
