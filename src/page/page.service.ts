import { Injectable } from "@nestjs/common";
import { PageModel } from "./page.model";
import * as uuid from "uuid";
import * as _ from "lodash";
import { generateDummyCTAModule } from "src/model/cta-module";
import { generateDummyInfoHeaderModule } from "src/model/info-header-module";
import { generateDummyContactModule } from "src/model/contact-module";
import { generateDummySalePointModule } from "src/model/sale-point-module";
import { generateBodyTextExpandedModule } from "src/model/bodytext-expanded-module";
import { generateDummyRecipeDetailModule } from "src/model/recipe-detail-module";
import { generateDummyToggleModule } from "src/model/toggle-module";
import { generateDummyInstagramWallModule } from "src/model/instagram-wall";
import { generateDummyFeaturedItemModule } from "src/model/featured-item";
import { generateDummyOurTeamModule } from "src/model/our-team-module";

@Injectable()
export class PageService {
  private pageList: PageModel[] = [
    {
      id: uuid(),
      route: "https://terrasana.com/",
      description: "Homepage with modules",
      wordPressPostModules: [
        generateDummySalePointModule(),
        generateDummyOurTeamModule(),
        generateDummyContactModule(),
        generateBodyTextExpandedModule(),
        generateDummyRecipeDetailModule(),
        generateDummyToggleModule(),
        generateDummyInstagramWallModule(),
        generateDummyFeaturedItemModule(),
        generateDummyInfoHeaderModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/about-us",
      description: "Home",
      wordPressPostModules: [generateDummyCTAModule(), generateDummyInfoHeaderModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/playground",
      description: "Test Page for building modules",
      wordPressPostModules: [generateDummyRecipeDetailModule()]
    } as PageModel
  ];

  public getWordPressControls(): PageModel[] {
    return this.pageList;
  }

  public getPageByRoute(route: string): PageModel {
    let routeToUse = route;
    if (route === "") {
      routeToUse = "https://terrasana.com/";
    }

    return _.find(this.pageList, (page: PageModel) => {
      return _.isEqual(page.route, routeToUse);
    });
  }
}
