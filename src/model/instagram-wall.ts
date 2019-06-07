import {
  WordPressPostModule,
  paddingDesktop,
  paddingMobile,
} from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { PageController } from 'src/page/page.controller';
import { IntagramPosts } from './instagram-posts';
import { Background } from './background';

@Module({
  controllers: [PageController],
})
export class InstagramWalllModule extends WordPressPostModule {
  @ApiModelProperty({ type: [IntagramPosts] })
  public posts: IntagramPosts[];

  @ApiModelProperty()
  public title: string;
}

export const generateDummyInstagramWallModule = (): InstagramWalllModule => {
  return {
    id: uuid(),
    name: 'InstagramModule',
    topMargin: '0px',
    bottomMargin: '0px',
    title: 'Bekijk onze instagram wall!',
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingMedium,
      mobilePadding: paddingMobile.mobilePaddingMedium,
    },
    background: {
      backgroundPattern:
        'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png',
    },

    posts: [
      {
        imageUrl:
          'https://images.ctfassets.net/wy4h2xf1swlt/asset_6235/47adc1926e7e17f5f9494f025c894d86/1468471458.jpg',
        title: 'Back to school lunch box! #lunchbox #backtoschool #snackmix',
      },
      {
        imageUrl:
          'https://www.fifteenspatulas.com/wp-content/uploads/2012/01/Peanut-Butter-Cookies-Fifteen-Spatulas-1-500x427.jpg',
        title: 'Peanut butter cookies with...',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/instagramWall/mask.jpg',
        title: 'What do you like to put...',
      },
      {
        imageUrl:
          'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps103184_UH153291D05_01_2b-3-696x696.jpg',
        title: 'How colorful do you want your pasta to be? (Gluten-free)...',
      },
      {
        imageUrl:
          'https://simple-veganista.com/wp-content/uploads/2018/09/vegan-poke-bowl-with-tofu.jpg',
        title:
          'Yes, another (vegan) poké bowl! The veggies and rice were delicious, but the sauce definitely was the best...',
      },
      {
        imageUrl:
          'https://kevinandamanda.com/whatsnew/wp-content/uploads/2010/07/eagle-brand-milk-ice-cream-challenge-giveaway-23.jpg',
        title: 'Do you like to make your ice...',
      },
      {
        imageUrl:
          'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chicken_and_cheese_65643_16x9.jpg',
        title:
          'Irresistable quesadillas! Wanna make them too? It\'s super easy...',
      },
      {
        imageUrl:
          'https://images.ctfassets.net/wy4h2xf1swlt/asset_6235/47adc1926e7e17f5f9494f025c894d86/1468471458.jpg',
        title: 'Title 111',
      },
      {
        imageUrl:
          'https://images.ctfassets.net/wy4h2xf1swlt/asset_6235/47adc1926e7e17f5f9494f025c894d86/1468471458.jpg',
        title: 'Back to school lunch box! #lunchbox #backtoschool #snackmix',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Peanut butter cookies with...',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/instagramWall/mask.jpg',
        title: 'What do you like to put...',
      },
      {
        imageUrl:
          'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps103184_UH153291D05_01_2b-3-696x696.jpg',
        title: 'How colorful do you want your pasta to be? (Gluten-free)...',
      },
      {
        imageUrl:
          'https://simple-veganista.com/wp-content/uploads/2018/09/vegan-poke-bowl-with-tofu.jpg',
        title:
          'Yes, another (vegan) poké bowl! The veggies and rice were delicious, but the sauce definitely was the best...',
      },
    ],
  } as InstagramWalllModule;
};
