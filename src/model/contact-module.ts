import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty } from '@nestjs/swagger';

import { ContactForm } from './contact-form';
import { AddressInfo } from './address';
import { Phone } from './phone';

export class ContactModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public description: string;
  @ApiModelProperty()
  public subtitleContactAddress: string;
  @ApiModelProperty()
  public contactAddressInfo: AddressInfo;
  @ApiModelProperty()
  public mailingAddress: string;
  @ApiModelProperty()
  public mailingAddressInfo: AddressInfo;
  @ApiModelProperty()
  public phone: string;
  @ApiModelProperty()
  public generalAndSales: Phone;
  @ApiModelProperty()
  public marketing: Phone;
  @ApiModelProperty()
  public customerService: Phone;
  @ApiModelProperty()
  public fax: Phone;
  @ApiModelProperty()
  public directContact: string;
  @ApiModelProperty()
  public contactForm: ContactForm;
}

export const generateDummyContactModule = (): ContactModule => ({
  title: 'Neem gelijk contact op',
  description:
    'Aenean id lorem eleifend, malesuada arcu a, fringilla mauris. Pellentesque dolor lacus, luctus lobortis rhoncus vitae, ultricies vitae justo. Mauris ut interdum purus.',
  subtitleContactAddress: 'Contact adres',
  contactAddressInfo: {
    shopName: 'TerraSana',
    street: 'Waaier 10',
    postalCode: '2451VV',
    city: 'LEIMUIDEN',
  },
  mailingAddress: 'Postadres',
  mailingAddressInfo: {
    shopName: 'TerraSana',
    street: 'Postbus 70',
    postalCode: '2450 AB',
    city: 'LEIMUIDEN',
  },
  phone: 'Telefonisch',
  generalAndSales: {
    contactName: 'Algemeen & verkoop',
    phone: '+31 (0) 172 - 50 33 33',
  },
  marketing: { contactName: 'Marketing', phone: '+31 (0) 172 - 50 33 47' },
  customerService: {
    contactName: 'Consumentenservice',
    phone: '+31 (0) 172 - 50 33 44',
  },
  fax: { contactName: 'Fax', phone: '+31 (0) 172 - 50 33 55' },
  directContact: 'DIRECT CONTACT',
  contactForm: {
    email: 'email',
    name: 'name',
    privacyText: 'Wanneer je op verzenden drukt ga je akkoord met ons',
    privacyLink: '/privacy',
  },

  id: uuid(),
  topMargin: '',
  bottomMargin: '',
  name: 'ContactComponent',
});
