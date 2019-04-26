import { Injectable } from "@nestjs/common";
import { PageModel } from "./page.model";
import * as uuid from "uuid";
import * as _ from "lodash";
import {
  WelcomeModule,
  generateDummyWelcomeModule
} from "src/model/welcome-module";
import {
  NavBarModule,
  generateDummyNavBarModule
} from "src/model/nav-bar-module";
import { generateDummyCTAModule } from "src/model/cta-module";
import { generateDummyInfoHeaderModule } from "src/model/info-header-module";
import { generateBodyTextModule } from "src/model/bodytext-module";
import { generateDummyFooterModule } from "src/model/footer-component";
import { generateDummySocialMediaButtons } from "src/model/social-media-buttons";
import { OurTeamModule } from "src/model/our-team-module";
import {
  generateDummyContactModule,
  ContactModule
} from "src/model/contact-module";
import { generateDummyOurTeamModule } from "src/model/our-team-module";
import {
  generateDummySalePointModule,
  SalePointModule
} from "src/model/sale-point-module";
import {
  generateBodyTextExpandedModule,
  BodyTextExpandedModule
} from "src/model/bodytext-expanded-module";

@Injectable()
export class PageService {
  private pageList: PageModel[] = [
    {
      id: uuid(),
      route: "https://terrasana.com/",
      description: "Homepage with modules",
      wordPressPostModules: [
        generateDummyNavBarModule() as NavBarModule,
        generateDummyWelcomeModule() as WelcomeModule,
        generateBodyTextModule(),
        generateDummyInfoHeaderModule(),
        generateDummyCTAModule(),
        generateDummyFooterModule(),
        generateDummySalePointModule() as SalePointModule,
        generateDummyOurTeamModule() as OurTeamModule,
        generateDummyContactModule() as ContactModule
        // generateDummyProductOverviewModule() as ProductOverviewModule,
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/about-us",
      description: "Home",
      wordPressPostModules: [
        generateDummyCTAModule(),
        generateDummyInfoHeaderModule()
      ]
    } as PageModel,
    {
      id: uuid(),
      route: "https://terrasana.com/playground",
      description: "Test Page for building modules",
      wordPressPostModules: [
        generateDummyContactModule(),
        generateDummyOurTeamModule()
      ]
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
