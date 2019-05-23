import { ApiModelProperty } from '@nestjs/swagger';
import { WordPressPostModule } from './wordpress-post-module';
import { TabsHeader } from './tabs-header';
import * as uuid from 'uuid';

export class TabsModule extends WordPressPostModule {
  @ApiModelProperty({ type: [TabsHeader] })
  public tabs: TabsHeader[];
}

export const generateDummyTabs = (): TabsModule => {
  return {
    tabs: [
      { title: 'Algemene informatie', moduleTab: '' },
      { title: 'Productinformatie', moduleTab: '' },
      { title: 'Verkooppunten', moduleTab: 'SalePointComponent' },
      { title: 'B2B gegevens', moduleTab: '' },
    ],
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'TabsComponent',
  };
};
