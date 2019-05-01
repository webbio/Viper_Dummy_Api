import { Injectable } from "@nestjs/common";
import { SidebarReturn } from "./product-filter.model";
import uuid = require("uuid");
import { generateDummyProductOverviewModule } from "src/model/product-overview";
import { generateDummySidebarModule } from "src/model/sidebar-module";
@Injectable()
export class ProductFilterService {
  public getSidebarData(): SidebarReturn {
    let sidebar = [];

    sidebar.push(generateDummySidebarModule());

    return {
      search: "",
      sidebar: sidebar,
      id: "0",
      bottomMargin: "0",
      topMargin: "0",
      name: ""
    };
  }
}
