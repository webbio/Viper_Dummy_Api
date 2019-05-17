import { Controller, Get, Query } from '@nestjs/common';
import { ProductLineService } from './product-line.service';
import { ApiUseTags, ApiImplicitQuery } from '@nestjs/swagger';

@ApiUseTags('product-card')
@Controller('product-card')
export class ProductLineController {
  constructor(private readonly pageService: ProductLineService) {}

  @ApiImplicitQuery({
    name: 'category',
    description: 'Filter by  cateogry',
    required: true,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'skip',
    description: 'Skip for pagination',
    required: true,
    type: Number,
  })
  @ApiImplicitQuery({
    name: 'take',
    description: 'How many per page',
    required: true,
    type: Number,
  })
  @Get('/products')
  getProducts(@Query() query) {
    const cards = this.pageService.getProducts(
      query.category,
      query.skip,
      query.take,
    );
    return cards;
  }

  @ApiImplicitQuery({
    name: 'search',
    description: 'search',
    required: true,
    type: String,
  })
  @Get('/search')
  searchProduct(@Query() query) {
    const products = this.pageService.searchProducts(query.search);
    return products;
  }
}
