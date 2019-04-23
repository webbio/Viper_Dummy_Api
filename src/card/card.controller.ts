import { Controller, Get, Param, Post, Body, Query } from "@nestjs/common";
import { CardService } from "./card.service";

import { ApiUseTags, ApiImplicitQuery } from "@nestjs/swagger";

@ApiUseTags("card")
@Controller("card")
export class CardController {
  constructor(private readonly pageService: CardService) {}
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
    name: "filter",
    description: "Filter by cardName",
    required: false,
    type: String
  })
  @Get()
  searchCards(@Query() query) {
    const cards = this.pageService.getCards(parseInt(query.skip), parseInt(query.take), query.filter);
    return cards;
  }
}
