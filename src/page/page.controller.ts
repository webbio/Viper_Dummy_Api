import "reflect-metadata";
import * as express from "express";
import { inject, injectable } from "inversify";
import { controller, httpGet, httpPost, interfaces, requestParam } from "inversify-express-utils";
import "reflect-metadata";
import { ApiOperationGet, ApiOperationPost, ApiPath, SwaggerDefinitionConstant } from "swagger-express-ts";
import { PageModel } from "./page.model";
import { PageService } from "./page.service";

@ApiPath({
  name: "Page",
  path: "/page/{route}",
  security: { apiKeyHeader: [] }
})
@controller("/page/:route")
@injectable()
export class PageController implements interfaces.Controller {
  constructor(@inject(PageService.name) private pageService: PageService) {}

  @ApiOperationGet({
    description: "Get page",
    parameters: {
      path: {
        route: {
          required: true,
          type: SwaggerDefinitionConstant.Parameter.Type.STRING
        }
      }
    },
    responses: {
      200: {
        model: "PageModel"
      },
      400: {}
    }
  })
  @httpGet("/")
  public getWordPressControl(
    @requestParam("route") route: string,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): void {
    const newPage = new PageModel();
    console.log("route given", route);

    const page = this.pageService.getPageByRoute(route);

    response.json(page);
  }
}
