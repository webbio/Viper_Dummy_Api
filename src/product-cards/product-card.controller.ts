import { Controller, Get, Param, Post, Body, Query } from "@nestjs/common";
import { ProductCardService } from "./product-card.service";

import { ApiUseTags, ApiImplicitQuery } from "@nestjs/swagger";

@ApiUseTags("product-card")
@Controller("product-card")
export class ProductCardController {
  constructor(private readonly pageService: ProductCardService) {}

  @ApiImplicitQuery({
    name: "filter",
    description: "Filter by cardName",
    required: false,
    type: String
  })
  @Get()
  searchCards(@Query() query) {
    const cards = this.pageService.getProducts(query.filter);
    return cards;
  }
}
