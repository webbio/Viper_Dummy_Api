import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { PageService } from "./page.service";
import { PageModel } from "./page.model";
import { ApiUseTags } from "@nestjs/swagger";

@ApiUseTags("page")
@Controller("page")
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get(":route")
  getPage(@Param("route") route: string): PageModel {
    const page = this.pageService.getPageByRoute(route);
    return page;
  }

  @Post()
  async create(@Body() createPageModel: PageModel) {
    return "this will create a page";
  }
}
