import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";
import { DummyModel } from "./dummy.model";
import { DummyService } from "./dummy.service";

@ApiUseTags("dummy")
@Controller("dummy")
export class DummyController {
  constructor(private readonly dummyService: DummyService) {}

  @Get()
  getDummy(): DummyModel {
    console.log("test");
    return this.dummyService.getDummyModule();
  }

  @Post()
  async create(@Body() createDummyModel: DummyModel) {
    return "this will create a page";
  }
}
