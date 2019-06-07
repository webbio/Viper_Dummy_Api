import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { ApiUseTags, ApiImplicitQuery } from '@nestjs/swagger';
import { BusinessOverviewService } from './business-overview.service';

@ApiUseTags('business/products')
@Controller('business/products')
export class BusinessOverviewProductLineController {
  constructor(private readonly pageService: BusinessOverviewService) {}
  @ApiImplicitQuery({
    name: 'skip',
    description: 'Skip for pagination',
    required: true,
    type: Number,
  })
  @ApiImplicitQuery({
    name: 'category',
    description: 'Filter by category',
    required: true,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'filter',
    description: 'Filter by product',
    required: false,
    type: String,
  })
  @Get()
  searchCardsByProductLine(@Query() query) {
    const cards = this.pageService.getCardsByProductLine(parseInt(query.skip), query.filter, query.category);
    return cards;
  }
}

@ApiUseTags('business/category')
@Controller('business/category')
export class BusinessOverviewCategoryController {
  constructor(private readonly pageService: BusinessOverviewService) { }
  @ApiImplicitQuery({
    name: 'skip',
    description: 'Skip for pagination',
    required: true,
    type: Number,
  })
  @ApiImplicitQuery({
    name: 'productLine',
    description: 'Filter by productline',
    required: true,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'filter',
    description: 'Filter by category',
    required: false,
    type: String,
  })
  @Get()
  searchCardsByCategory(@Query() query) {
    const cards = this.pageService.getCardsByCategory(parseInt(query.skip), query.productLine, query.filter);
    return cards;
  }
}
