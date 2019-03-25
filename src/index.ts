import * as bodyParser from "body-parser";
import * as express from "express";
import "reflect-metadata";
import { Container } from "inversify";
import { interfaces, InversifyExpressServer, TYPE } from "inversify-express-utils";
import * as swagger from "swagger-express-ts";
import { WordPressControlsController } from "./wordpress/wordpress-controls.controller";
import { WordPressControlController } from "./wordpress/wordpress-control.controller";
import { WordpressService } from "./wordpress/wordpress.service";

// set up container
const container = new Container();

// note that you *must* bind your controllers to Controller
container
  .bind<WordpressService>(WordpressService.name)
  .to(WordpressService)
  .inSingletonScope();
container
  .bind<interfaces.Controller>(TYPE.Controller)
  .to(WordPressControlsController)
  .whenTargetNamed(WordPressControlsController.name);
container
  .bind<interfaces.Controller>(TYPE.Controller)
  .to(WordPressControlController)
  .inSingletonScope()
  .whenTargetNamed(WordPressControlController.name);

// create server
const server = new InversifyExpressServer(container);

server.setConfig((app: any) => {
  app.use("/api-docs/swagger", express.static("swagger"));
  app.use("/api-docs/swagger/assets", express.static("node_modules/swagger-ui-dist"));
  app.use(bodyParser.json());
  app.use(
    swagger.express({
      definition: {
        externalDocs: {
          url: "https://webbiohq.atlassian.net/wiki/spaces/VIP/overview"
        },
        info: {
          title: "Dummy Viper Api",
          version: "1.0"
        },
        responses: {
          500: {}
        }
      }
    })
  );
});

server.setErrorConfig((app: any) => {
  app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    response.status(500).send("Something broke!");
  });
});

const app = server.build();
app.listen(3000);
console.info("Server is listening on port : 3000");
