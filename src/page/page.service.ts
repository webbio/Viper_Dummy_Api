import { Injectable } from "@nestjs/common";
import { PageModel } from "./page.model";
import * as uuid from "uuid";
import * as _ from "lodash";
import { WelcomeModule, generateDummyWelcomeModule } from "src/model/welcome-module";
import { NavBarModule, generateDummyNavBarModule } from "src/model/nav-bar-module";
import { generateDummyCTAModule } from "src/model/cta-module";
import { generateDummyInfoHeaderModule } from "src/model/info-header-module";

@Injectable()
export class PageService {
  private pageList: PageModel[] = [
    {
      id: uuid(),
      route: "homepage",
      description: "Homepage with modules",
      wordPressPostModules: [generateDummyNavBarModule() as NavBarModule, generateDummyWelcomeModule() as WelcomeModule]
    } as PageModel,
    {
      id: uuid(),
      route: "about-us",
      description: "Home",
      wordPressPostModules: []
    } as PageModel,
    {
      id: uuid(),
      route: "playground",
      description: "Test Page for building modules",
      wordPressPostModules: [],
      // change this to your module.
      // playgroundModule: generateDummyCTAModule(),
      ctaModule: generateDummyCTAModule(),
      navBarModule: generateDummyNavBarModule(),
      infoHeaderModule: generateDummyInfoHeaderModule()
    } as PageModel
  ];

  public getWordPressControls(): PageModel[] {
    return this.pageList;
  }

  public getPageByRoute(route: string): PageModel {
    return _.find(this.pageList, (page: PageModel) => {
      return _.isEqual(page.route, route);
    });
  }
}
