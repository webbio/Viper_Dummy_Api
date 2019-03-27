import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PageService } from './page.service';
import { PageModel } from './page.model';

@Controller('page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get(':route')
  async getHello(@Param('route') route: string): Promise<PageModel> {
    return this.pageService.getPageByRoute(route);
  }

  @Post()
  async create(@Body() createPageModel: PageModel) {
    return 'this will create a page';
  }
}
