import { WordPressPostModule } from "src/model/wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { NavBarModule } from "src/model/nav-bar-module";
import { CTAModule } from "src/model/cta-module";
import { FooterModule } from "src/model/footer-component";
import { SocialMediaButtons } from "src/model/social-media-buttons";

import { InfoHeader } from "src/model/info-header-module";
import { BodyTextModule } from "src/model/bodytext-module";
import { WelcomeModule } from "src/model/welcome-module";
import { InstagramWalllModule } from "src/model/instagram-wall";
import { FeaturedItemModule } from "src/model/featured-item";
import { OurTeamModule } from "src/model/our-team-module";
import { ContactModule } from "src/model/contact-module";
import { ProductOverviewModule } from "src/model/product-overview";
import { SalePointModule } from "src/model/sale-point-module";
import { BodyTextExpandedModule } from "src/model/bodytext-expanded-module";

export class DummyModel {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public description: string;

  @ApiModelProperty({ type: [WordPressPostModule] })
  public wordPressPostModules: WordPressPostModule[];

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

  @ApiModelProperty()
  public InstagramWalllModule?: InstagramWalllModule;

  @ApiModelProperty()
  public FeaturedItemModule?: FeaturedItemModule;

  @ApiModelProperty()
  public salePointModule?: SalePointModule;

  @ApiModelProperty()
  public ourTeamModule?: OurTeamModule;

  @ApiModelProperty()
  public contactModule?: ContactModule;

  @ApiModelProperty()
  public productOverview?: ProductOverviewModule;

  @ApiModelProperty()
  public bodyTextExpandedModule?: BodyTextExpandedModule;
}
