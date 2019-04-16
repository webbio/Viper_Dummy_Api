import { Injectable } from "@nestjs/common";
import { DummyModel } from "./dummy.model";
import uuid = require("uuid");

@Injectable()
export class DummyService {
  public getDummyModule(): DummyModel {
    return {
      id: uuid(),
      description: "dummy",
      wordPressPostModules: []
    };
  }
}
