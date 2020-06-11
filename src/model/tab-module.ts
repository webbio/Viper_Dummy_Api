import { ApiModelProperty } from "@nestjs/swagger";
import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import * as uuid from "uuid";
import { SalePointModule, generateDummySalePointModule } from "./sale-point-module";
import { generateDummyB2BDataTabs, B2BDataTab } from "./b2b-data-tab";
import { ProductInformation, generateDummyProductInformationTabs } from "./product-information-tab";
import { generateDummyGeneralInformationTab } from "./general-information-tab";
import { BodyTextModule } from "./bodytext-module";
import { SidebarBox, generateDummySidebarBox } from "./sidebar-box";
import { RelatedProductsSlider } from "./related-products-slider";

export class TabsModule extends WordPressPostModule {
  @ApiModelProperty({ type: SidebarBox })
  public sidebarBox: SidebarBox;
  @ApiModelProperty({ type: [String] })
  public tabsTitle: string[];
  @ApiModelProperty({ type: SalePointModule })
  public salePoints: SalePointModule;
  @ApiModelProperty({ type: B2BDataTab })
  public b2bData: B2BDataTab;
  @ApiModelProperty({ type: [ProductInformation] })
  public productInformation: ProductInformation[];
  @ApiModelProperty({ type: BodyTextModule })
  public generalInformation: BodyTextModule;
  @ApiModelProperty()
  public relatedProducts?: RelatedProductsSlider;
}

export const generateDummyTabs = (): TabsModule => {
  return {
    sidebarBox: generateDummySidebarBox(),
    tabsTitle: ["Algemene informatie", "Productinformatie", "Verkooppunten", "B2B gegevens"],
    b2bData: generateDummyB2BDataTabs(),
    productInformation: generateDummyProductInformationTabs(),
    salePoints: generateDummySalePointModule(),
    generalInformation: generateDummyGeneralInformationTab(),
    relatedProducts: {
      title: "Meer Noedels",
      buttonLink: "/product-line-single/",
      buttonText: "Bekijk alle producten",
      showProductLines: true,
      relatedProducts: [
        {
          title: "Mediterraan",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-1.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/tomato+1.svg",
        },
        {
          title: "Basis",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-2.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/organic-2+1.svg",
        },
        {
          title: "Superfood",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-3.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/leaf-80+1.svg",
        },
        {
          title: "Notenpasta",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-4.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/acorn+1.svg",
        },
        {
          title: "Mediterraan",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-1.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/tomato+1.svg",
        },
        {
          title: "Basis",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-2.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/organic-2+1.svg",
        },
        {
          title: "Superfood",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-3.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/leaf-80+1.svg",
        },
        {
          title: "Notenpasta",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-4.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/acorn+1.svg",
        },
        {
          title: "Mediterraan",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-1.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/tomato+1.svg",
        },
        {
          title: "Basis",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-2.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/organic-2+1.svg",
        },
        {
          title: "Superfood",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-3.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/leaf-80+1.svg",
        },
        {
          title: "Notenpasta",
          picture:
            "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/productline-4.jpg",
          URL: "/product-single/",
          icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/product-lines/acorn+1.svg",
        },
      ],
    },
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "TabsComponent",
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    background: {
      color: "#DDEDED",
    },
  };
};
