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
  public imageURL: string;
}

export const generateDummyCTAModuleHomePage = (): CTAModule => {
  return {
    titleText: "Wat goed eten is, weten we bij Terrarana al 35 jaar.",
    bodyText:
      "Bij ons weet je niet alleen zeker dat de producten écht biologisch zijn, maar ook dat we alles met de grootste zorg uitkiezen en samenstellen. We hebben aandacht voor kwaliteit, natuur, milieu, smaak en productiewijze. We zijn altijd op zoek naar de mooiste en meest verantwoorde ingrediënten. Onze medewerkers weten wat ze in handen hebben en bereiden met hart en ziel veel zelf. Geen poespas maar pure en eerlijke producten.",
    buttons: [
      {
        href: "#",
        target: "_blank",
        title: "Bekijk recept",
        variant: "primary",
        type: "",
        icon: "",
        onClick: "",
        location: "center"
      }
    ],
    imageURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/rectangle-5.png",
    id: uuid(),
    name: "CTAModule",
    bottomMargin: "0px",
    topMargin: "0px"
  };
};
