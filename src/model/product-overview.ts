import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { ProductCard } from "./product-card";

export class ProductOverviewModule extends WordPressPostModule {
  @ApiModelProperty({ type: [ProductCard] })
  public productCards: ProductCard[];
}

export const generateDummyProductOverviewModule = (): ProductOverviewModule => {
  return {
    productCards: [
      {link: "/",title: "Noedels",category:"Noedels",image:"",button:{ title:"Bekijk alle 12"},cardVariant:"card--category",modifyClass:"card--modify" },
      {link: "/",title: "Zeewiren",category:"Zeewiren",image:"",button:{ title:"Bekijk alle 12"},cardVariant:"card--category",modifyClass:"card--modify" },
      {link: "/",title: "Paddenstolen en seitan",category:"Paddenstolen en seitan",image:"",button:{ title:"Bekijk alle 12"},cardVariant:"card--category",modifyClass:"card--modify" },
      
     
        {link: "/",title: "Title",category:"Noedels",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/1.png",content:"Content",cardVariant:"card--product",modifyClass:"" },
        {link: "/",title: "Title",category:"Noedels",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png",content:"Content",cardVariant:"card--product",modifyClass:"" },
        {link: "/",title: "Title",category:"Noedels",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg",content:"Content",cardVariant:"card--product",modifyClass:"" },
        {link: "/",title: "Title",category:"Noedels",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg",content:"Content",cardVariant:"card--product",modifyClass:"" },
        
        {link: "/",title: "Title",category:"Zeewiren",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/1.jpg",content:"Content",cardVariant:"card--product",modifyClass:"" },
        {link: "/",title: "Title",category:"Zeewiren",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/2.jpg",content:"Content",cardVariant:"card--product",modifyClass:"" },
        {link: "/",title: "Title",category:"Zeewiren",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/3.jpg",content:"Content",cardVariant:"card--product",modifyClass:"" },
        {link: "/",title: "Title",category:"Zeewiren",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Zeewieren/4.jpg",content:"Content",cardVariant:"card--product",modifyClass:"" },

        {link: "/",title: "Title",category:"Paddenstolen en seitan",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/1.png",content:"Content",cardVariant:"card--product",modifyClass:"" },
        {link: "/",title: "Title",category:"Paddenstolen en seitan",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/2.jpg",content:"Content",cardVariant:"card--product",modifyClass:"" },
        {link: "/",title: "Title",category:"Paddenstolen en seitan",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/PaddenStoelen+en+seitan/3.jpg",content:"Content",cardVariant:"card--product",modifyClass:"" },

    ],
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "ProductOverviewModule"
  };
};