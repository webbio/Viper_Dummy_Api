import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { PageController } from 'src/page/page.controller';
import { Recipe, generateDummyRecipes } from './recipe';
import { Link } from './link';

@Module({
  controllers: [PageController],
})
export class FeaturedItemModule extends WordPressPostModule {
  @ApiModelProperty({ type: [Recipe] })
  public recipes: Recipe[];

  @ApiModelProperty()
  public title: string;

  @ApiModelProperty({ type: Link })
  public button: Link;
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
    button: { content: 'Bekijk meer recepten', route: '/recipe-overview' },
    recipes: generateDummyRecipes(),
    background: {
      backgroundPattern:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png',
    },
  } as FeaturedItemModule;
};

export const generateDummyFeaturedItemModuleNoPattern = (
  title: string,
): FeaturedItemModule => {
  return {
    id: uuid(),
    name: 'featuredItemModule',
    topMargin: '0px',
    bottomMargin: '0px',
    title,
    button: { content: 'Bekijk meer recepten', route: '/recipe-overview' },
    recipes: generateDummyRecipes(),
    background: {
      backgroundColour: '#f5fafa',
    },

    curve: {
      curveBackground: {
        backgroundPattern:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png',
      },
    },
  } as FeaturedItemModule;
};

export const generateDummyFeaturedItemModuleSimple = (
  title: string,
): FeaturedItemModule => {
  return {
    id: uuid(),
    name: 'featuredItemModule',
    topMargin: '0px',
    bottomMargin: '0px',
    title,
    button: { content: 'Bekijk meer recepten', route: '/recipe-overview' },
    recipes: generateDummyRecipes(),
  } as FeaturedItemModule;
};

export const generateDummyFeaturedItemModuleNoPatternCurveWhite = (
  title: string,
): FeaturedItemModule => {
  return {
    id: uuid(),
    name: 'featuredItemModule',
    topMargin: '0px',
    bottomMargin: '0px',
    title,
    button: { content: 'Bekijk meer recepten', route: '/recipe-overview' },
    recipes: generateDummyRecipes(),
    background: {
      backgroundColour: '#f5fafa',
    },

    curve: {
      decorCurveVerticalAlignment: 'top',
    },
  } as FeaturedItemModule;
};

export const generateDummyFeaturedItemModuleLightBackground = (
  title: string,
): FeaturedItemModule => {
  return {
    id: uuid(),
    name: 'featuredItemModule',
    topMargin: '0px',
    bottomMargin: '0px',
    title,
    button: { content: 'Bekijk meer recepten', route: '/recipe-overview' },
    recipes: generateDummyRecipes(),
    background: {
      backgroundColour: '#f5fafa',
    },
  } as FeaturedItemModule;
};
