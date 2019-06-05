import { Controller, Get, Query } from '@nestjs/common';
import { ProductLineService } from './product-line.service';
import { ApiUseTags, ApiImplicitQuery } from '@nestjs/swagger';

@ApiUseTags('product-card')
@Controller('product-card')
export class ProductLineController {
  constructor(private readonly pageService: ProductLineService) {}

  @ApiImplicitQuery({
    name: 'search',
    description: 'search',
    required: true,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'category',
    description: 'Filter by  cateogry',
    required: true,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'filter',
    description: 'filter',
    required: true,
    type: Array,
    collectionFormat: 'multi',
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
  @Get('/productsPagination')
  getProductsWithPagination(@Query() query) {
    const cards = this.pageService.getProductsWithPagination(
      query.search,
      query.category,
      query.filter,
      parseInt(query.skip),
      parseInt(query.take),
    );
    return cards;
  }

  @ApiImplicitQuery({
    name: 'category',
    description: 'category',
    required: true,
    type: Array,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'product',
    description: 'product',
    required: true,
    type: Array,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'search',
    description: 'search',
    required: true,
    type: String,
  })
  @Get('/category')
  getCategoryList(@Query() query) {
    const categories = this.pageService.getCategoryList(
      query.category,
      query.product,
      query.search,
    );
    return categories;
  }

  @ApiImplicitQuery({
    name: 'product',
    description: 'get product',
    required: true,
    type: Array,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'search',
    description: 'search',
    required: true,
    type: String,
  })
  @Get('/products')
  getProductList(@Query() query) {
    const products = this.pageService.getProducts(query.product, query.search);
    return products;
  }
}
