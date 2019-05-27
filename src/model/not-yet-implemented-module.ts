import { ApiModelProperty } from '@nestjs/swagger';
import { WordPressPostModule } from './wordpress-post-module';
import uuid = require('uuid');

export class NotYetImplemented extends WordPressPostModule {
  @ApiModelProperty()
  public moduleName: string;
}

export const generateNotYetImplemented = (
  moduleName: string,
): NotYetImplemented => {
  return {
    id: uuid(),
    bottomMargin: '40px',
    topMargin: '40px',
    name: 'notYetImplemented',
    moduleName,
  };
};
