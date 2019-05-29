import { Controller, Get, Param, Post, Body, Query } from "@nestjs/common";
import { NewsOverviewService } from "./news-overview.service";

import { ApiUseTags, ApiImplicitQuery } from "@nestjs/swagger";

@ApiUseTags("news")
@Controller("news")
export class NewsOverviewController {
  constructor(private readonly pageService: NewsOverviewService) {}
  @ApiImplicitQuery({
    name: "skip",
    description: "Skip for pagination",
    required: true,
    type: Number
  })
  @ApiImplicitQuery({
    name: "take",
    description: "How many per page",
    required: true,
    type: Number
  })
  @ApiImplicitQuery({
    name: 'category',
    description: 'Filter by category',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: "filter",
    description: "Filter by cardName",
    required: false,
    type: String
  })
  @Get()
  searchCards(@Query() query) {
    const cards = this.pageService.getCards(parseInt(query.skip), parseInt(query.take), query.filter, query.category);
    return cards;
  }
}
