import { ApiModelProperty } from '@nestjs/swagger';
import { WordPressPostModule } from './wordpress-post-module';
import { TabsHeader } from './tabs-header';
import * as uuid from 'uuid';
import {
  SalePointModule,
  generateDummySalePointModule,
} from './sale-point-module';
import {
  generateDummyB2BGegevensTabs,
  B2BGegevensTab,
} from './b2b-gegevens-tab';
import {
  ProductInformatie,
  generateDummyProductInformatieTabs,
} from './product-informatie-tab';
import { generateDummyAlgemeneInformatieTab } from './algemene-informatie-tab';
import { BodyTextModule } from './bodytext-module';

export class TabsModule extends WordPressPostModule {
  @ApiModelProperty()
  public tabsTitle: string[];
  @ApiModelProperty({ type: SalePointModule })
  public salePoints: SalePointModule;
  @ApiModelProperty({ type: B2BGegevensTab })
  public b2bGegevens: B2BGegevensTab;
  @ApiModelProperty({ type: [ProductInformatie] })
  public productInformatie: ProductInformatie[];
  @ApiModelProperty({ type: BodyTextModule })
  public algemeneInformatie: BodyTextModule;
}

export const generateDummyTabs = (): TabsModule => {
  return {
    tabsTitle: [
      'Algemene informatie',
      'Productinformatie',
      'Verkooppunten',
      'B2B gegevens',
    ],
    b2bGegevens: generateDummyB2BGegevensTabs(),
    productInformatie: generateDummyProductInformatieTabs(),
    salePoints: generateDummySalePointModule(),
    algemeneInformatie: generateDummyAlgemeneInformatieTab(),
    id: uuid(),
    topMargin: '',
    bottomMargin: '',
    name: 'TabsComponent',
  };
};
