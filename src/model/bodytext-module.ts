import { ApiModelProperty } from "@nestjs/swagger";
import { WordPressPostModule } from "./wordpress-post-module";
import uuid = require("uuid");
import { ContainerSize } from "src/enums/container-size";
import { ContainerAlignment } from "src/enums/container-alignment";

export class BodyTextModule extends WordPressPostModule {
  @ApiModelProperty()
  public html: string;

  @ApiModelProperty()
  public containerSize: "full" | "large" | "medium" | "small";

  @ApiModelProperty()
  public containerAlignment: "left" | "center" | "right";
}

export const generateBodyTextModule = (): BodyTextModule => {
  return {
    html: `<head>
            <style>
                body {
                background-color: white;
                }

                h1 {
                color: maroon;
                }
            </style>
        </head>
            <body>
                <h1>Dit is de BodyText module</h1>
                <p>Deze html wordt vanaf de API gestuurd. Dit kan straks door de klant zelf ingevoerd worden!</p>
                <p><img width="300px" src="https://i.imgur.com/1E2lPDD.jpg" /></p>
            </body>`,
    id: uuid(),
    name: "bodyTextModule",
    bottomMargin: "0px",
    topMargin: "0px",
    containerSize: "medium",
    containerAlignment: "center"
  };
};
