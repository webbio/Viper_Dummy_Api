import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { ourTeamCards } from "./ourTeam-cards";
import { type } from "os";
import { contactForm } from "./contact-form";

export class ContactModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public description: string;
  @ApiModelProperty()
  public contact_address: string;
  @ApiModelProperty()
  public contact_address_name: string;
  @ApiModelProperty()
  public contact_address_streat: string;
  @ApiModelProperty()
  public contact_adress_app: string;
  @ApiModelProperty()
  public mailing_address: string;
  @ApiModelProperty()
  public mailing_address_name: string;
  @ApiModelProperty()
  public mailing_address_streat: string;
  @ApiModelProperty()
  public mailing_address_app: string;
  @ApiModelProperty()
  public phone: string;
  @ApiModelProperty()
  public general_and_sales_phone: string;
  @ApiModelProperty()
  public general_and_sales: string;
  @ApiModelProperty()
  public marketing: string;
  @ApiModelProperty()
  public marketing_phone: string;
  @ApiModelProperty()
  public customer_service: string;
  @ApiModelProperty()
  public customer_service_phone: string;
  @ApiModelProperty()
  public fax: string;
  @ApiModelProperty()
  public fax_number: string;
  @ApiModelProperty()
  public direct_contact: string;
  @ApiModelProperty({type: [contactForm]})
  public contactform: contactForm[];
}

export const generateDummyContactModule = (): ContactModule => {
  return {
     title:"Neem gelijk contact op",
     description:"Aenean id lorem eleifend, malesuada arcu a, fringilla mauris. Pellentesque dolor lacus, luctus lobortis rhoncus vitae, ultricies vitae justo. Mauris ut interdum purus.",
     contact_address:"Contact adres",
     contact_address_name:"TerraSana",
     contact_address_streat:"Waaier 10",
     contact_adress_app:"2451VV LEIMUIDEN",
     mailing_address:"Postadres",
     mailing_address_name:"TerraSana",
     mailing_address_streat:"Postbus",
     mailing_address_app:"70 2450 AB LEIMUIDEN",
     phone:"Telefonisch",
     general_and_sales:" Algemeen & verkoop",
     customer_service:"Consumentenservice",
     marketing:"Marketing",
     fax:"Fax",
     general_and_sales_phone:"+31 (0) 172 - 50 33 33",
     customer_service_phone:"+31 (0) 172 - 50 33 44",
     marketing_phone:"+31 (0) 172 - 50 33 47",
     fax_number:"+31 (0) 172 - 50 33 55",
     direct_contact:"DIRECT CONTACT",
     contactform: [{email:"",name:"",privacy_text:"Wanneer je op verzenden drukt ga je akkoord met ons",privacy_link:"/privacy"}],

    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "OurTeamComponent"
  };
};