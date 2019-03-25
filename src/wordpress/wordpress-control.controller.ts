import "reflect-metadata";
import { injectable, inject } from "inversify";
import { interfaces, controller, httpGet, requestParam } from "inversify-express-utils";
import { ApiPath, SwaggerDefinitionConstant, ApiOperationGet } from "swagger-express-ts";
import * as express from "express";
import { WordpressService } from "./wordpress.service";

@ApiPath({
  name: "WordPressControl",
  path: "/wordpresscontrol/{id}"
})
@controller("/wordpresscontrol/:id")
@injectable()
export class WordPressControlController implements interfaces.Controller {
  constructor(@inject(WordpressService.name) private wordpressService: WordpressService) {}

  @ApiOperationGet({
    description: "Get wordpress object",
    parameters: {
      path: {
        id: {
          required: true,
          type: SwaggerDefinitionConstant.Parameter.Type.STRING
        }
      }
    },
    responses: {
      200: {
        model: "WordPressModel"
      },
      400: {}
    }
  })
  @httpGet("/")
  public getWordPressControl(
    @requestParam("id") id: string,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): void {
    response.json(this.wordpressService.getWordPressControlById(id));
  }
}
