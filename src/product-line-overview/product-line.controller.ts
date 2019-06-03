import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';

import { ApiUseTags, ApiImplicitQuery } from '@nestjs/swagger';
import { ProductLineOverviewService } from './product-line.service';

@ApiUseTags('productlineoverview')
@Controller('productlineoverview')
export class ProductLineOverviewController {
  constructor(private readonly productLineService: ProductLineOverviewService) {}
  @ApiImplicitQuery({
    name: 'filter',
    description: 'Filter by title or content',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'category',
    description: 'Filter by category',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'diet',
    description: 'Filter by diet',
    required: false,
    type: String,
  })
  @Get()
  searchProducts(@Query() query) {
    const cards = this.productLineService.getProductCards(query.filter);
    return cards;
  }
}
