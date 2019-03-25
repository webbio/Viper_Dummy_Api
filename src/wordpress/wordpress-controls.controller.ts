import "reflect-metadata";
import * as express from "express";
import { inject, injectable } from "inversify";
import { controller, httpGet, httpPost, interfaces } from "inversify-express-utils";
import "reflect-metadata";
import { ApiOperationGet, ApiOperationPost, ApiPath, SwaggerDefinitionConstant } from "swagger-express-ts";
import { WordPressModel } from "./wordpress.model";
import { WordpressService } from "./wordpress.service";

@ApiPath({
  name: "WordpressControls",
  path: "/wordpresscontrols",
  security: { apiKeyHeader: [] }
})
@controller("/cars")
@injectable()
export class WordPressControlsController implements interfaces.Controller {
  constructor(@inject(WordpressService.name) private wordPressService: WordpressService) {}

  @ApiOperationGet({
    description: "Get wordpress objects list",
    responses: {
      200: {
        model: "WordPressModel",
        type: SwaggerDefinitionConstant.Response.Type.ARRAY
      }
    },
    security: {
      apiKeyHeader: []
    },
    summary: "Get wordpress list"
  })
  @httpGet("/")
  public getWordpressControls(request: express.Request, response: express.Response, next: express.NextFunction): void {
    response.json(this.wordPressService.getWordPressControls());
  }

  @ApiOperationPost({
    description: "Post wordpress object",
    parameters: {
      body: {
        description: "New wordpress control",
        model: "WordPressModel",
        required: true
      }
    },
    responses: {
      200: {
        model: "WordPressModel"
      },
      400: { description: "Parameters fail" }
    },
    summary: "Post new wordpress control"
  })
  @httpPost("/")
  public postWordPressControl(request: express.Request, response: express.Response, next: express.NextFunction): void {
    if (!request.body) {
      return response.status(400).end();
    }
    const newCar = new WordPressModel();
    newCar.id = request.body.id;
    newCar.name = request.body.name;
    newCar.description = request.body.description;
    this.wordPressService.addWordPressControl(request.body);
    response.json(request.body);
  }
}
