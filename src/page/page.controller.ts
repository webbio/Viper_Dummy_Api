import { Controller, Get, Param, Post, Body, Req, Request } from "@nestjs/common";
import { PageService } from "./page.service";
import { PageModel } from "./page.model";
import { ApiUseTags } from "@nestjs/swagger";

@ApiUseTags("page")
@Controller("page")
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get(":route")
  getPage(@Req() request: Request): PageModel {
    const page = this.pageService.getPageByRoute(request);
    return page;
  }

  @Post()
  async create(@Body() createPageModel: PageModel) {
    return "this will create a page";
  }
}
