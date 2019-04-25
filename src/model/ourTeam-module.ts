import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { ourTeamCards } from "./ourTeam-cards";

export class OurTeamModule extends WordPressPostModule {
  @ApiModelProperty({ type: [ourTeamCards] })
  public ourTeamCards: ourTeamCards[];
}

export const generateDummyOurTeamModule = (): OurTeamModule => {
  return {
    ourTeamCards: [
        {link: "/",title: "Sarah de jong",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/0.png",content:"",cardVariant: "card--user", position :"Marketing Manager",social:true , category:"",info:"",button:"",modifyClass:"",instagram:false},
        {link: "/",title: "debora barbosa",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/1.jpg",content:"",cardVariant: "card--user", position :"Marketing Manager",social:true , category:"",info:"",button:"",modifyClass:"",instagram:false},
        {link: "/",title: "Mkhuseli Malinga",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/2.jpg",content:"",cardVariant: "card--user", position :"Marketing Manager",social:true , category:"",info:"",button:"",modifyClass:"",instagram:false},
        {link: "/",title: "Em Assinder",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/3.jpg",content:"",cardVariant: "card--user", position :"Marketing Manager",social:true , category:"",info:"",button:"",modifyClass:"",instagram:false},
        {link: "/",title: "Jos Winterink",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/4.jpg",content:"",cardVariant: "card--user", position :"Marketing Manager",social:true , category:"",info:"",button:"",modifyClass:"",instagram:false},
        {link: "/",title: "Mónica Ribeiro",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/5.jpg",content:"",cardVariant: "card--user", position :"Marketing Manager",social:true , category:"",info:"",button:"",modifyClass:"",instagram:false},
        {link: "/",title: "Praskovya Dubinina",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/6.jpeg",content:"",cardVariant: "card--user", position :"Marketing Manager",social:true , category:"",info:"",button:"",modifyClass:"",instagram:false},
        {link: "/",title: "Jop Jans Elken",image:"https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/7.jpg",content:"",cardVariant: "card--user", position :"Marketing Manager",social:true , category:"",info:"",button:"",modifyClass:"",instagram:false},

    ],
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "OurTeamComponent"
  };
};