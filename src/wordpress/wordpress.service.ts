import "reflect-metadata";
import { injectable } from "inversify";
import { WordPressModel } from "./wordpress.model";
import * as _ from "lodash";

@injectable()
export class WordpressService {
  private wordPressControlList: WordPressModel[] = [
    {
      description: "Description Wordpress Control 1",
      id: "1",
      name: "Wordpress Control 1",
      version: "1.0.0"
    } as WordPressModel,
    {
      description: "Description Wordpress Control 2",
      id: "2",
      name: "Wordpress Control 2",
      version: "2.0.0"
    } as WordPressModel
  ];

  public getWordPressControls(): WordPressModel[] {
    return this.wordPressControlList;
  }

  public addWordPressControl(car: WordPressModel): WordPressModel {
    this.wordPressControlList.push(car);
    return car;
  }

  public getWordPressControlById(id: string): WordPressModel {
    return _.find(this.wordPressControlList, (car: WordPressModel) => {
      return _.isEqual(car.id, id);
    });
  }
}
