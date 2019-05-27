import { ApiModelProperty } from '@nestjs/swagger';

import { TabInformation } from './tab-information';

export class ProductInformatie {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty({ type: [TabInformation] })
  public tabInformation: TabInformation[];
}

export const generateDummyProductInformatieTabs = (): ProductInformatie[] => {
  return [
    {
      title: 'VOEDINGSWAARDEN',
      tabInformation: [
        {
          information: 'Energie',
          detail: '1289 kJ',
        },
        {
          information: 'Energie',
          detail: '304 kcal',
        },
        {
          information: 'Eiwit totaal',
          detail: '5,5 g',
        },
        {
          information: 'Koolhydraten totaal',
          detail: '63,6 g',
        },
        {
          information: 'Suikers',
          detail: '0,0 g',
        },
        {
          information: 'Vet totaal',
          detail: '0,0 g',
        },
        {
          information: 'Vet verzadigd',
          detail: '0,9 g',
        },
        {
          information: 'Voedingsvezel',
          detail: '1,8 g',
        },
        {
          information: 'Zout',
          detail: '0,0 g',
        },
      ],
    },
    {
      title: 'ALLERGENENINFORMATIE',
      tabInformation: [
        {
          information: 'Energie',
          detail: '1289 kJ',
        },
        {
          information: 'Energie',
          detail: '304 kcal',
        },
        {
          information: 'Eiwit totaal',
          detail: '5,5 g',
        },
        {
          information: 'Koolhydraten totaal',
          detail: '63,6 g',
        },
        {
          information: 'Suikers',
          detail: '0,0 g',
        },
        {
          information: 'Vet totaal',
          detail: '0,0 g',
        },
        {
          information: 'Vet verzadigd',
          detail: '0,9 g',
        },
        {
          information: 'Voedingsvezel',
          detail: '1,8 g',
        },
        {
          information: 'Zout',
          detail: '0,0 g',
        },
      ],
    },
  ];
};
