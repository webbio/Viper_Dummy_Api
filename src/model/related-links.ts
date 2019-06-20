import { ApiModelProperty } from "@nestjs/swagger";
import { Link } from "./link";

export class RelatedLinks {
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public content: string;
  @ApiModelProperty()
  public button: Link;
}

export const generateDummyRelatedLinks = (): RelatedLinks[] => [
  {
    title: "Onze producten",
    content: "Bekijk onze pure & overheerlijke producten!",
    button: { content: "Bekijk alle producten", route: "/" }
  },
  {
    title: "Heerlijke recepten",
    content: "Bekijk onze verrukkelijke recepten. Natuurlijk gemaakt met Terrasana producten.",
    button: { content: "Bekijk alle recepten", route: "/" }
  },
  {
    title: "Over ons",
    content: "Lees ons verhaal en zie wie er samen hard werken aan een bio-wereld!",
    button: { content: "Lees het verhaal", route: "/" }
  },
  {
    title: "DOWNLOADS",
    content: "Bent u een verkoper van Terrasana producten? Download hier alle productinformatie.",
    button: { content: "Alle downloads", route: "/" }
  }
];
