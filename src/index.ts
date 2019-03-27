import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import "reflect-metadata";
import { Container } from "inversify";
import { interfaces, InversifyExpressServer, TYPE } from "inversify-express-utils";
import * as swagger from "swagger-express-ts";

import { PageController } from "./page/page.controller";
import { PageService } from "./page/page.service";

// set up container
const container = new Container();

// note that you *must* bind your controllers to Controller
container
  .bind<PageService>(PageService.name)
  .to(PageService)
  .inSingletonScope();
container
  .bind<interfaces.Controller>(TYPE.Controller)
  .to(PageController)
  .inSingletonScope()
  .whenTargetNamed(PageController.name);

// create server
const server = new InversifyExpressServer(container);

server.setConfig((app: any) => {
  app.use(cors({ origin: "http://localhost:3000" }));

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
app.listen(4000);
console.info("Server is listening on port : 4000");
