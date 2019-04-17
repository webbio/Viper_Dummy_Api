import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { Link } from "./link"
import {markers} from "./googlemap-markers"
export class SalePointModule extends WordPressPostModule {

  @ApiModelProperty()
  public title?: string;
  @ApiModelProperty()
  public content?: string;
  @ApiModelProperty({ type: [String] })
  public images?: string[];
  @ApiModelProperty()
  public bgcolor?: string;
  @ApiModelProperty()
  public decor?: string;
  @ApiModelProperty()
  public pattern?: boolean;
  @ApiModelProperty({ type: [markers] })
  public markers?: markers[];
  @ApiModelProperty({ type: [markers] })
  public mapcenter?: markers;
  @ApiModelProperty()
  public markerOpen?: boolean;
}

export const generateDummySalePointModule = (): SalePointModule => {
  return {
    title: "Verkooppunten van Terrasana producten",
    content:"TerraSana producten zijn natuurlijk ook verkrijgbaar bij de betere natuurvoedingswinkel of reformhuis. U kunt hieronder uw plaatsnaam of postcode invullen om te kijken waar zich een winkel bij u in de buurt bevindt. Als een winkel het door u gezochte TerraSana product niet heeft, informeer dan bij de winkel of die het bij ons wil bestellen. \n \n Verkoopt u TerraSana producten en staat uw adres niet vermeld? Neemt u dan contact met ons op? Dan passen wij het z.s.m. aan.",
    bgcolor:"",
    images: ["https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/F254B1AF-6027-4FED-AE89-9C5D712BC104.png","https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/F254B1AF-6027-4FED-AE89-9C5D712BC104.png","https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/F254B1AF-6027-4FED-AE89-9C5D712BC104.png","https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/F254B1AF-6027-4FED-AE89-9C5D712BC104.png","https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/F254B1AF-6027-4FED-AE89-9C5D712BC104.png",],
    decor:"",
    pattern:true,
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "SalePointComponent",
    markers: [
      {latitude:52.370216,longitude:4.895168,isOpen:true,
        workingHours:[
          {day:"Maandag",opensAt:11.00,closesAt:18.00},
          {day:"Dinsdag",opensAt:8.30,closesAt:18.00},
          {day:"Woensdag",opensAt:8.30,closesAt:18.00},
          {day:"Donderdag",opensAt:8.30,closesAt:18.00},
          {day:"Vrijdag",opensAt:8.30,closesAt:18.00},
          {day:"Zaterdag",opensAt:8.30,closesAt:18.00},
        ],
        street:"",address:"",city:"",phone:26321906,fax:263218465},
      {latitude:51.9244201,longitude:4.4777325,isOpen:true,
        workingHours:[
          {day:"Maandag",opensAt:11.00,closesAt:18.00},
          {day:"Dinsdag",opensAt:8.30,closesAt:18.00},
          {day:"Woensdag",opensAt:8.30,closesAt:18.00},
          {day:"Donderdag",opensAt:8.30,closesAt:18.00},
          {day:"Vrijdag",opensAt:8.30,closesAt:18.00},
          {day:"Zaterdag",opensAt:8.30,closesAt:18.00},
        ],
        street:"",address:"",city:"",phone:26321906,fax:263218465},
      {latitude:51.8125626,longitude:5.8372264,isOpen:true,
        workingHours:[
          {day:"Maandag",opensAt:11.00,closesAt:18.00},
          {day:"Dinsdag",opensAt:8.30,closesAt:18.00},
          {day:"Woensdag",opensAt:8.30,closesAt:18.00},
          {day:"Donderdag",opensAt:8.30,closesAt:18.00},
          {day:"Vrijdag",opensAt:8.30,closesAt:18.00},
          {day:"Zaterdag",opensAt:8.30,closesAt:18.00},
        ],
        street:"",address:"",city:"",phone:26321906,fax:263218465},
      {latitude:51.441642,longitude:5.4697225,isOpen:true,
        workingHours:[
          {day:"Maandag",opensAt:11.00,closesAt:18.00},
          {day:"Dinsdag",opensAt:8.30,closesAt:18.00},
          {day:"Woensdag",opensAt:8.30,closesAt:18.00},
          {day:"Donderdag",opensAt:8.30,closesAt:18.00},
          {day:"Vrijdag",opensAt:8.30,closesAt:18.00},
          {day:"Zaterdag",opensAt:8.30,closesAt:18.00},
        ],
        street:"",address:"",city:"",phone:26321906,fax:263218465},
      {latitude:52.0704978,longitude:4.3006999,isOpen:true,
        workingHours:[
          {day:"Maandag",opensAt:11.00,closesAt:18.00},
          {day:"Dinsdag",opensAt:8.30,closesAt:18.00},
          {day:"Woensdag",opensAt:8.30,closesAt:18.00},
          {day:"Donderdag",opensAt:8.30,closesAt:18.00},
          {day:"Vrijdag",opensAt:8.30,closesAt:18.00},
          {day:"Zaterdag",opensAt:8.30,closesAt:18.00},
        ],
        street:"",address:"",city:"",phone:26321906,fax:263218465}
    ],
    mapcenter: {latitude:52.370216,longitude:4.895168}
  };
};