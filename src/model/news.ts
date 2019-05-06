import { ApiModelProperty } from "@nestjs/swagger";
import { Link } from "./link";

export class NewsModule {
  @ApiModelProperty()
  public image?: string;
  @ApiModelProperty()
  public content?: string;
  @ApiModelProperty()
  public link?: string;
}
export const generateDummyNewsModule = (): NewsModule[] => {
  return [
    {
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png",
      link: "/",
      content: "Recept van de maand: freakshake met…"
    },
    {
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png",
      link: "/",
      content: "Aenean ullamcorper mi sit amet lacus accumsan..."
    },
    {
      image:
        "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/sidebar/BE17E98D-C92A-4476-8BBF-1073422F58DA.png",
      link: "/",
      content: "Duis blandit tortor a erat"
    }
  ];
};
