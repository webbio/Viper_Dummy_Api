import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { PageController } from 'src/page/page.controller';
import { Recipe, generateDummyRecipes } from './recipe';

@Module({
  controllers: [PageController],
})
export class FeaturedItemModule extends WordPressPostModule {
  @ApiModelProperty({ type: [Recipe] })
  public recipes: Recipe[];

  @ApiModelProperty()
  public title: string;

  @ApiModelProperty()
  public buttonText: string;
}

export const generateDummyFeaturedItemModule = (
  title: string,
): FeaturedItemModule => {
  return {
    id: uuid(),
    name: 'featuredItemModule',
    topMargin: '0px',
    bottomMargin: '0px',
    title,
    buttonText: 'Bekijk meer recepten',
    recipes: generateDummyRecipes(),
  } as FeaturedItemModule;
};
