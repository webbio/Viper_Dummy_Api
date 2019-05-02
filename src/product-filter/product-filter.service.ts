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
      sidebar: sidebar,
      id: "0",
      bottomMargin: "0",
      topMargin: "0",
      name: ""
    };
  }
  /*
  public getFilterStatus(category: string) {
    let sidebar = this.getSidebarData();

    sidebar.sidebar.map(
      item =>
        item &&
        item.filters.map(
          subitem =>
            subitem &&
            subitem.options.map(
              option =>
                category &&
                (category.toUpperCase().includes(option.slug.toUpperCase()) &&
                  ((option.isClicked = !option.isClicked),
                  console.log("hello options " + option.isClicked)))
            )
        )
    );
  }*/
}
