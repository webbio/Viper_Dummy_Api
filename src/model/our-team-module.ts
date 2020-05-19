import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { ourTeamCards } from "./our-team-cards";

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
        image: {
          src: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/0.jpg",
          alt: "",
          title: "",
        },
        position: "Marketing Manager",
        social: true,
      },
      {
        link: "/",
        title: "debora barbosa",
        image: {
          src: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/1.jpg",
          alt: "",
          title: "",
        },
        position: "Marketing Manager",
        social: true,
      },
      {
        link: "/",
        title: "Mkhuseli Malinga",
        image: {
          src: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/2.jpg",
          alt: "",
          title: "",
        },
        position: "Marketing Manager",
        social: true,
      },
      {
        link: "/",
        title: "Em Assinder",
        image: {
          src: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/3.jpg",
          alt: "",
          title: "",
        },
        position: "Marketing Manager",
        social: true,
      },
      {
        link: "/",
        title: "Jos Winterink",
        image: {
          src: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/4.jpg",
          alt: "",
          title: "",
        },
        position: "Marketing Manager",
        social: true,
      },
      {
        link: "/",
        title: "Mónica Ribeiro",
        image: {
          src: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/5.jpg",
          alt: "",
          title: "",
        },
        position: "Marketing Manager",
        social: true,
      },
      {
        link: "/",
        title: "Praskovya Dubinina",
        image: {
          src: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/6.jpg",
          alt: "",
          title: "",
        },
        position: "Marketing Manager",
        social: true,
      },
      {
        link: "/",
        title: "Jop Jans Elken",
        image: {
          src: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/ourTeam/7.jpg",
          alt: "",
          title: "",
        },
        position: "Marketing Manager",
        social: true,
      },
    ],
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "OurTeamComponent",

    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    background: {
      color: "#DDEDED",
    },
  };
};
