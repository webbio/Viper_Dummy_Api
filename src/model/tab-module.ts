import { ApiModelProperty } from '@nestjs/swagger';
import {
  WordPressPostModule,
  paddingDesktop,
  paddingMobile,
} from './wordpress-post-module';
import * as uuid from 'uuid';
import {
  SalePointModule,
  generateDummySalePointModule,
} from './sale-point-module';
import { generateDummyB2BDataTabs, B2BDataTab } from './b2b-data-tab';
import {
  ProductInformation,
  generateDummyProductInformationTabs,
} from './product-information-tab';
import { generateDummyGeneralInformationTab } from './general-information-tab';
import { BodyTextModule } from './bodytext-module';
import { TabsHeader } from './tabs-header';

export class TabsModule extends WordPressPostModule {
  @ApiModelProperty({ type: [TabsHeader] })
  public tabsTitle: TabsHeader[];
  @ApiModelProperty({ type: SalePointModule })
  public salePoints: SalePointModule;
  @ApiModelProperty({ type: B2BDataTab })
  public b2bData: B2BDataTab;
  @ApiModelProperty({ type: [ProductInformation] })
  public productInformation: ProductInformation[];
  @ApiModelProperty({ type: BodyTextModule })
  public generalInformation: BodyTextModule;
}

export const generateDummyTabs = (): TabsModule => {
  return {
    tabsTitle: [
      { title: 'Algemene informatie', tabIndex: 1 },
      { title: 'Productinformatie', tabIndex: 2 },
      { title: 'Verkooppunten', tabIndex: 3 },
      { title: 'B2B gegevens', tabIndex: 4 },
    ],
    b2bData: generateDummyB2BDataTabs(),
    productInformation: generateDummyProductInformationTabs(),
    salePoints: generateDummySalePointModule(),
    generalInformation: generateDummyGeneralInformationTab(),
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'TabsComponent',
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    background: {
      backgroundColour: '#f5fafa',
    },
  };
};
