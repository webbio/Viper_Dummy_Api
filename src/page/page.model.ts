import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
<<<<<<< HEAD
import { NavBarModule } from "src/model/nav-bar-module";
import { CTAModule } from "src/model/cta-module";
import { FooterModule } from "src/model/footer-component";
import { SocialMediaButtons } from "src/model/socialMediaButtons";
import { OurTeamModule } from "src/model/ourTeam-module";

import { InfoHeader } from "src/model/info-header-module";
=======
>>>>>>> master

export class PageModel {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public route: string;

  @ApiModelProperty()
  public description: string;

  @ApiModelProperty({ type: [WordPressPostModule] })
  public wordPressPostModules: WordPressPostModule[];
<<<<<<< HEAD

  // change NavBarModule to module you are working on
  @ApiModelProperty()
  public playgroundModule?: null;

  @ApiModelProperty()
  public ctaModule?: CTAModule;

  @ApiModelProperty()
  public footerModule?: FooterModule;

  @ApiModelProperty()
  public socialMediaButtons?: SocialMediaButtons;

  @ApiModelProperty()
  public ourTeamModule?: OurTeamModule;

  @ApiModelProperty()
  public navBarModule?: NavBarModule;

  @ApiModelProperty()
  public infoHeaderModule?: InfoHeader;
=======
>>>>>>> master
}
