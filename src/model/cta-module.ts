import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { CTAButton } from "./cta-button";

export class CTAModule extends WordPressPostModule {
  @ApiModelProperty()
  public titleText: string;
  @ApiModelProperty()
  public bodyText: string;
  @ApiModelProperty({ type: [CTAButton] })
  public buttons: CTAButton[];
  @ApiModelProperty()
  public imageURL?: string;
  @ApiModelProperty()
  public containerAlignment: "left" | "center" | "right";
  @ApiModelProperty()
  public contentAlignment: "left" | "center" | "right";
}

export const generateDummyCTAModuleHomePage1 = (): CTAModule => {
  return {
    titleText: "Wat goed eten is, weten we bij Terrarana al 35 jaar.",
    background: {
      color: "#DDEDED",
    },

    bodyText:
      "Bij ons weet je niet alleen zeker dat de producten écht biologisch zijn, maar ook dat we alles met de grootste zorg uitkiezen en samenstellen. We hebben aandacht voor kwaliteit, natuur, milieu, smaak en productiewijze. We zijn altijd op zoek naar de mooiste en meest verantwoorde ingrediënten. Onze medewerkers weten wat ze in handen hebben en bereiden met hart en ziel veel zelf. Geen poespas maar pure en eerlijke producten.",
    buttons: [
      {
        href: "/contact",
        target: "",
        title: "Meer over ons",
        variant: "secondary",
        type: "",
        icon: "",
        onClick: "",
        location: "center",
      },
    ],
    id: "55",
    name: "CTAModule",
    bottomMargin: "0px",
    topMargin: "0px",
    containerAlignment: "center",
    contentAlignment: "center",
  };
};

export const generateDummyCTAModuleHomePage2 = (): CTAModule => {
  return {
    titleText: "Maak je eigen biologische wraps!",
    bodyText: "Binnen een half uur je eigen biologische hoemoes. Lees hier hoe dat moet!",
    topCurve: {
      horizontalAlignment: "left",
    },

    bottomCurve: {
      horizontalAlignment: "right",
    },

    buttons: [
      {
        href: "/recipe-overview",
        target: "",
        title: "Bekijk recept",
        variant: "tertiary",
        type: "",
        icon: "",
        onClick: "",
        location: "center",
      },
      // {
      //   href: "/recipe-overview",
      //   target: "",
      //   title: "Bekijk alle recepten",
      //   variant: "secondary",
      //   type: "",
      //   icon: "",
      //   onClick: "",
      //   location: "center",
      // },
    ],
    id: uuid(),
    name: "CTAModule",
    bottomMargin: "0px",
    topMargin: "0px",
    bottomPadding: { desktopPadding: 140, mobilePadding: 56 },
    topPadding: { desktopPadding: 140, mobilePadding: 56 },
    containerAlignment: "left",
    contentAlignment: "left",
    imageURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/rectangle-5.jpg",
  };
};
