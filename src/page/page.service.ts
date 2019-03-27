import "reflect-metadata";
import { injectable } from "inversify";
import { PageModel } from "./page.model";
import * as _ from "lodash";
import { WelcomeModule, generateDummyWelcomeModule } from "../model/welcome-module";
import * as uuid from "uuid";

@injectable()
export class PageService {
  private pageList: PageModel[] = [
    {
      id: uuid(),
      route: "homepage",
      description: "Homepage with modules",
      wordpressPostModules: [generateDummyWelcomeModule() as WelcomeModule]
    } as PageModel,
    {
      id: uuid(),
      route: "about-us",
      description: "Home",
      wordpressPostModules: []
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
