import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { PageController } from 'src/page/page.controller';
import { IntagramPosts } from './instagram-posts';

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
    posts: [
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Back to school lunch box! #lunchbox #backtoschool #snackmix',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Peanut butter cookies with...',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'What do you like to put...',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'How colorful do you want your pasta to be? (Gluten-free)...',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title:
          'Yes, another (vegan) poké bowl! The veggies and rice were delicious, but the sauce definitely was the best...',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Do you like to make your ice...',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title:
          'Irresistable quesadillas! Wanna make them too? It\'s super easy...',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Title 111',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Title 1',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Title ',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Title ',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Title 1',
      },
      {
        imageUrl:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg',
        title: 'Title 2',
      },
    ],
  } as InstagramWalllModule;
};
