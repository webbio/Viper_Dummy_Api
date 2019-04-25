import { WordPressPostModule } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";
import { Link } from "./link";
import { HowToModel } from "./how-to-model";
import { IngredientModel } from "./ingredient-model";
import { ItemRecipeInfo } from "./item-recipe-info";
import { RelatedProduct } from "./related-product";
import { ExpandablePanel } from "./expandable-panel";

export class ToggleModule extends WordPressPostModule {
  @ApiModelProperty({ type: [ExpandablePanel] })
  public items: ExpandablePanel[];

  @ApiModelProperty()
  public title: string;
}

export const generateDummyToggleModule = (): ToggleModule => {
  return {
    title: "Veelgestelde vragen?",
    items: [
      {
        title: "Waarom bruine noedels",
        content:
          "Bij ons weet je niet alleen zeker dat de producten écht biologisch zijn, maar ook dat we alles met de grootste zorg uitkiezen en samenstellen. We hebben aandacht voor kwaliteit, natuur, milieu, smaak en productiewijze. We zijn altijd op zoek naar de mooiste en meest verantwoorde ingrediënten. Onze medewerkers weten wat ze in handen hebben en bereiden met hart en ziel veel zelf. Geen poespas maar pure en eerlijke producten."
      },
      {
        title: "Hoe worden deze noedels gemaakt?",
        content:
          "Bij ons weet je niet alleen zeker dat de producten écht biologisch zijn, maar ook dat we alles met de grootste zorg uitkiezen en samenstellen. We hebben aandacht voor kwaliteit, natuur, milieu, smaak en productiewijze. We zijn altijd op zoek naar de mooiste en meest verantwoorde ingrediënten. Onze medewerkers weten wat ze in handen hebben en bereiden met hart en ziel veel zelf. Geen poespas maar pure en eerlijke producten."
      },
      {
        title: "Hebben jullie meerdere soorten?",
        content:
          "Bij ons weet je niet alleen zeker dat de producten écht biologisch zijn, maar ook dat we alles met de grootste zorg uitkiezen en samenstellen. We hebben aandacht voor kwaliteit, natuur, milieu, smaak en productiewijze. We zijn altijd op zoek naar de mooiste en meest verantwoorde ingrediënten. Onze medewerkers weten wat ze in handen hebben en bereiden met hart en ziel veel zelf. Geen poespas maar pure en eerlijke producten."
      }
    ],
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "ToggleModule"
  };
};
