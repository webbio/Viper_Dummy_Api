import { WordPressPostModule } from './wordpress-post-module';
import uuid = require('uuid');

export class ProductLineStoryOverviewModule extends WordPressPostModule {}

export const generateProductLineStoryOverviewModule = (): ProductLineStoryOverviewModule => {
  return {
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'ProductLineStoryOverviewModule',
  };
};
