import { Injectable } from "@nestjs/common";
import { PageModel } from "./page.model";
import * as uuid from "uuid";
import * as _ from "lodash";
import { WelcomeModule, generateDummyWelcomeModule } from "src/model/welcome-module";
import { NavBarModule, generateDummyNavBarModule } from "src/model/nav-bar-module";
import { generateDummyCTAModule } from "src/model/cta-module";
import { generateDummyInfoHeaderModule } from "src/model/info-header-module";
import { generateBodyTextModule } from "src/model/bodytext-module";
import { generateDummyFooterModule } from "src/model/footer-component";
import { generateDummySocialMediaButtons } from "src/model/socialMediaButtons";

@Injectable()
export class PageService {
  private pageList: PageModel[] = [
    {
      id: uuid(),
      route: "homepage",
      description: "Homepage with modules",
      wordPressPostModules: [
        generateDummyNavBarModule() as NavBarModule,
        generateDummyWelcomeModule() as WelcomeModule,
        generateDummyCTAModule(),
        generateDummyInfoHeaderModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "about-us",
      description: "Home",
      wordPressPostModules: [generateDummyCTAModule(), generateDummyInfoHeaderModule()]
    } as PageModel,
    {
      id: uuid(),
      route: "playground",
      description: "Test Page for building modules",
      wordPressPostModules: [],
      footerModule: generateDummyFooterModule(),
      socialMediaButtons: generateDummySocialMediaButtons(),
      ctaModule: generateDummyCTAModule(),
      navBarModule: generateDummyNavBarModule(),
      infoHeaderModule: generateDummyInfoHeaderModule(),
      bodyTextModule: generateBodyTextModule(),
      playgroundModule: generateDummyNavBarModule(),
      welcomeModule: generateDummyWelcomeModule()
    } as PageModel
  ];

  public getWordPressControls(): PageModel[] {
    return this.pageList;
  }

  public getPageByRoute(route: string): PageModel {
    let routeToUse = route;
    if (route === "") {
      routeToUse = "homepage";
    }

    return _.find(this.pageList, (page: PageModel) => {
      return _.isEqual(page.route, routeToUse);
    });
  }
}
