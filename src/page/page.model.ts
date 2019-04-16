import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";

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
  public playgroundModule?: NavBarModule;

  @ApiModelProperty()
  public ctaModule?: CTAModule;

  @ApiModelProperty()
  public footerModule?: FooterModule;

  @ApiModelProperty()
  public socialMediaButtons?: SocialMediaButtons;

  @ApiModelProperty()
  public navBarModule?: NavBarModule;

  @ApiModelProperty()
  public infoHeaderModule?: InfoHeader;

  @ApiModelProperty()
  public bodyTextModule?: BodyTextModule;

  @ApiModelProperty()
  public welcomeModule?: WelcomeModule;
=======
>>>>>>> master
}
