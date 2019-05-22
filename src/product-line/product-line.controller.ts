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
  @Get('/productsPagination')
  getProductsWithPagination(@Query() query) {
    const cards = this.pageService.getProductsWithPagination(
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

  @ApiImplicitQuery({
    name: 'category',
    description: 'category',
    required: true,
    isArray: true,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'product',
    description: 'product',
    required: true,
    isArray: true,
    type: String,
  })
  @Get('/category')
  getCategoryList(@Query() query) {
    const categories = this.pageService.getCategoryList(
      query.category,
      query.product,
    );
    return categories;
  }

  @ApiImplicitQuery({
    name: 'product',
    description: 'get product',
    required: true,
    isArray: true,
    type: String,
  })
  @Get('/products')
  getProductList(@Query() query) {
    const products = this.pageService.getProducts(query.product);
    return products;
  }
}
