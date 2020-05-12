import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { Link } from "./link";
import { Markers } from "./googlemap-markers";
import { MapLocation } from "./location";
import { ImageLink } from "./image-link";
export class SalePointModule extends WordPressPostModule {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public content: string;
  @ApiModelProperty({ type: [ImageLink] })
  public imageLinks?: ImageLink[];
  @ApiModelProperty()
  public bgcolor?: string;
  @ApiModelProperty()
  public decor?: string;
  @ApiModelProperty()
  public pattern?: boolean;
  @ApiModelProperty({ type: [Markers] })
  public markers?: Markers[];
  @ApiModelProperty({ type: [MapLocation] })
  public mapcenter?: MapLocation;
  @ApiModelProperty()
  public markerOpen?: boolean;
}

export const generateDummySalePointModule = (): SalePointModule => {
  return {
    title: "Verkooppunten van Terrasana producten",
    content: `TerraSana producten zijn natuurlijk ook verkrijgbaar bij de betere natuurvoedingswinkel of reformhuis. U kunt hieronder uw plaatsnaam of postcode invullen om te kijken waar zich een winkel bij u in de buurt bevindt. Als een winkel het door u gezochte TerraSana product niet heeft, informeer dan bij de winkel of die het bij ons wil bestellen.
      <br /><br />
      Verkoopt u TerraSana producten en staat uw adres niet vermeld? Neemt u dan contact met ons op? Dan passen wij het z.s.m. aan.`,
    bgcolor: "",
    curve: {
      background: {
        color: "#f5fafa",
      },
    },
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingMedium,
      mobilePadding: paddingMobile.mobilePaddingMedium,
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    imageLinks: [
      {
        logo:
          "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/F254B1AF-6027-4FED-AE89-9C5D712BC104.png",
        tooltip: "Natuurwinkel",
        url: "https://www.natuurwinkel.nl/",
      },
      {
        logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/ekoplaza.jpg",
        tooltip: "Ekoplaza",
        url: "https://www.ekoplaza.nl",
      },
      {
        logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/estafette.jpg",
        tooltip: "Estafette",
        url: "https://www.odin.nl/",
      },
      {
        logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/marqt.jpg",
        tooltip: "Marqt",
        url: "https://www.marqt.nl/",
      },
      {
        logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/organic.jpg",
        tooltip: "Organic",
        url: "https://www.organicfoodforyou.nl/",
      },
      {
        logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/SalePoint/gezondheidswinkel.png",
        tooltip: "Gezondheidswinkel",
        url: "https://www.gezondheidswinkel.nl",
      },
    ],
    decor: "",
    pattern: true,
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "SalePointComponent",
    markers: [
      {
        id: uuid(),
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
        },
        workingHours: [
          { day: "Maandag", opensAt: "11.00", closesAt: "18.00" },
          { day: "Dinsdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Woensdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Donderdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Vrijdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Zaterdag", opensAt: "08.30", closesAt: "18.00" },
        ],
        displayName: "Gimsel Drieslag",
        postalCode: " 6832 AM",
        streetNameAndNumber: "Drieslag 21",
        phone: "026 321 49 06",
        fax: "026 321 84 65",
      },
      {
        id: uuid(),
        location: {
          latitude: 51.9244201,
          longitude: 4.4777325,
        },
        workingHours: [
          { day: "Maandag", opensAt: "11.00", closesAt: "18.00" },
          { day: "Dinsdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Woensdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Donderdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Vrijdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Zaterdag", opensAt: "08.30", closesAt: "18.00" },
        ],
        displayName: "Gimsel Drieslag",
        postalCode: " 6832 AM",
        streetNameAndNumber: "Drieslag 21",
        phone: "026 321 49 06",
        fax: "026 321 84 65",
      },
      {
        id: uuid(),
        location: {
          latitude: 51.8125626,
          longitude: 5.8372264,
        },
        workingHours: [
          { day: "Maandag", opensAt: "11.00", closesAt: "18.00" },
          { day: "Dinsdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Woensdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Donderdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Vrijdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Zaterdag", opensAt: "08.30", closesAt: "18.00" },
        ],
        displayName: "Gimsel Drieslag",
        postalCode: " 6832 AM",
        streetNameAndNumber: "Drieslag 21",
        phone: "026 321 49 06",
        fax: "026 321 84 65",
      },
      {
        id: uuid(),
        location: {
          latitude: 51.441642,
          longitude: 5.4697225,
        },
        workingHours: [
          { day: "Maandag", opensAt: "11.00", closesAt: "18.00" },
          { day: "Dinsdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Woensdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Donderdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Vrijdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Zaterdag", opensAt: "08.30", closesAt: "18.00" },
        ],
        displayName: "Gimsel Drieslag",
        postalCode: " 6832 AM",
        streetNameAndNumber: "Drieslag 21",
        phone: "026 321 49 06",
        fax: "026 321 84 65",
      },
      {
        id: uuid(),
        location: {
          latitude: 52.0704978,
          longitude: 4.3006999,
        },
        workingHours: [
          { day: "Maandag", opensAt: "11.00", closesAt: "18.00" },
          { day: "Dinsdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Woensdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Donderdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Vrijdag", opensAt: "08.30", closesAt: "18.00" },
          { day: "Zaterdag", opensAt: "08.30", closesAt: "18.00" },
        ],
        displayName: "Gimsel Drieslag",
        postalCode: " 6832 AM",
        streetNameAndNumber: "Drieslag 21",
        phone: "026 321 49 06",
        fax: "026 321 84 65",
      },
    ],
    mapcenter: { latitude: 52.370216, longitude: 4.895168 },
  };
};
