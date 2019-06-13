import { BodyTextModule } from './bodytext-module';
import { ApiModelProperty } from '@nestjs/swagger';

import uuid = require('uuid');
import { Author } from './author';
import { paddingDesktop, paddingMobile } from './wordpress-post-module';
import { SocialMediaOptions, ShareSocialMediaButtons } from './social-media-module';

export class BodyTextExpandedModule extends BodyTextModule {
  @ApiModelProperty()
  public author: Author;
  @ApiModelProperty()
  public socialMediaButtons: ShareSocialMediaButtons;
}

export const generateBodyTextExpandedModule = (): BodyTextExpandedModule => {
  const webbioURL = 'https://www.webbio.nl';
  const titleSharing = 'Vegan chocokoekjes met amandelpasta';
  return {
    author: {
      iconURL: 'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/img%403x.png',
      displayName: 'Sarah de Jong',
      title: 'Marketing Manager',
      date: '22 nov. 2018',
      profileURL: '/about-us',
    },
    html: `<p class="uk-text-big">Bij ons weet je niet alleen zeker dat de producten &eacute;cht biologisch zijn, maar ook dat we alles met de grootste zorg uitkiezen en samenstellen. We hebben aandacht voor kwaliteit, natuur, milieu, smaak en productiewijze. We zijn altijd op zoek naar de mooiste en meest verantwoorde ingredi&euml;nten. Onze medewerkers weten wat ze in handen hebben en bereiden met hart en ziel veel zelf. Geen poespas maar pure en eerlijke producten.</p>
          <h2>NULLA FRINGILLA LACUS EU PURUS ACCUMSAN IMPERDIET ACCUMSAN NUNC MAXIMUS</h2>
          <p>Proin aliquam placerat quam a pharetra. Donec volutpat velit enim, sed tristique odio porttitor eget. Nulla pharetra mauris at dapibus malesuada. Aliquam convallis felis pellentesque finibus finibus. Donec suscipit orci sit amet velit mattis placerat. Cras sed hendrerit sapien, eget molestie turpis. Sed accumsan dui sit amet suscipit molestie. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent est est, iaculis sit amet semper vitae, interdum imperdiet eros. Nunc dignissim nisi quis justo maximus, id efficitur metus malesuada.</p>
          <h3>SUSPENDISSE FEUGIAT LIGULA EGESTAS TELLUS</h3>
          <p>Suspendisse rhoncus nunc purus, consequat imperdiet magna mattis eleifend. Suspendisse consequat mollis sapien in fermentum. Praesent semper tincidunt est, nec rhoncus mi pellentesque quis. Duis tincidunt pellentesque egestas. Quisque quis pellentesque lectus. Donec sed erat in elit porta facilisis vel ac ligula. Nullam at aliquet sapien, in aliquam neque. Integer vel felis quis risus tincidunt dictum. Donec sollicitudin, ex ac posuere cursus, tellus lectus egestas sapien, non fringilla ex orci vel quam. Nullam mattis ligula id sem eleifend rhoncus. Donec sit amet urna mi. In condimentum nec mi a imperdiet. Sed risus ante, lacinia sit amet volutpat quis, porttitor at urna. Curabitur consequat sagittis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi et risus gravida, ultricies orci et, ullamcorper nisl.</p>`,
    id: uuid(),
    bottomMargin: '0px',
    containerAlignment: 'center',
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    containerSize: 'large',
    name: 'bodyTextExpandedModule',
    socialMediaButtons: {
      facebook: { url: webbioURL, title: titleSharing, hashtag: '#terrasana' },
      linkedin: {
        url: webbioURL,
        title: titleSharing,
        description: 'Description sharing',
      },
      twitter: {
        url: webbioURL,
        title: titleSharing,
        via: 'terrasana',
        hashtags: ['veganFood', 'greenFood', 'organicFood', 'terrasana', 'netherlands'],
      },
      email: {
        url: webbioURL,
        subject: titleSharing,
      },
      whatsapp: {
        url: webbioURL,
        separator: ' - ',
        title: titleSharing,
      },
      pinterest: {
        url: webbioURL,
        title: titleSharing,
        media: 'https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/image-featured.1ebed0b8.jpg',
      },
    },
    topMargin: '0px',
  };
};
