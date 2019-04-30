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
      {
        link: "/",
        title: "Sarah de jong",
        image: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/0.png",
        cardVariant: "card--user",
        position: "Marketing Manager",
        social: true
      },
      {
        link: "/",
        title: "debora barbosa",
        image: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/1.jpg",
        cardVariant: "card--user",
        position: "Marketing Manager",
        social: true
      },
      {
        link: "/",
        title: "Mkhuseli Malinga",
        image: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/2.jpg",
        cardVariant: "card--user",
        position: "Marketing Manager",
        social: true
      },
      {
        link: "/",
        title: "Em Assinder",
        image: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/3.jpg",
        cardVariant: "card--user",
        position: "Marketing Manager",
        social: true
      },
      {
        link: "/",
        title: "Jos Winterink",
        image: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/4.jpg",
        cardVariant: "card--user",
        position: "Marketing Manager",
        social: true
      },
      {
        link: "/",
        title: "Mónica Ribeiro",
        image: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/5.jpg",
        cardVariant: "card--user",
        position: "Marketing Manager",
        social: true
      },
      {
        link: "/",
        title: "Praskovya Dubinina",
        image: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/6.jpeg",
        cardVariant: "card--user",
        position: "Marketing Manager",
        social: true
      },
      {
        link: "/",
        title: "Jop Jans Elken",
        image: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/7.jpg",
        cardVariant: "card--user",
        position: "Marketing Manager",
        social: true
      }
    ],
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "OurTeamComponent"
  };
};
