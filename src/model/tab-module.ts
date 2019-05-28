import { ApiModelProperty } from '@nestjs/swagger';
import { WordPressPostModule } from './wordpress-post-module';
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

export class TabsModule extends WordPressPostModule {
  @ApiModelProperty()
  public tabsTitle: string[];
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
      'Algemene informatie',
      'Productinformatie',
      'Verkooppunten',
      'B2B gegevens',
    ],
    b2bData: generateDummyB2BDataTabs(),
    productInformation: generateDummyProductInformationTabs(),
    salePoints: generateDummySalePointModule(),
    generalInformation: generateDummyGeneralInformationTab(),
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'TabsComponent',
  };
};
