import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';

import { ApiUseTags, ApiImplicitQuery } from '@nestjs/swagger';
import { NavbarSearchService } from './navbar-search.service';

@ApiUseTags('navbarsearch')
@Controller('navbarsearch')
export class NavbarSearchController {
  constructor(private readonly navbarService: NavbarSearchService) {}
  @ApiImplicitQuery({
    name: 'filter',
    description: 'Filter by item name',
    required: true,
    type: String,
  })
  @Get()
  searchItems(@Query() query) {
    return this.navbarService.searchItems(query.filter);
  }
}
