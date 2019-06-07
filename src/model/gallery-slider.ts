import { WordPressPostModule } from './wordpress-post-module';
import * as uuid from 'uuid';
import { ApiModelProperty, ApiImplicitBody, ApiUseTags } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { PageController } from 'src/page/page.controller';
import { ModalImage } from './modalImage';

@Module({
  controllers: [PageController],
})
export class GallerySliderModule extends WordPressPostModule {
  @ApiModelProperty({ type: [ModalImage] })
  public modalImage: ModalImage[];
}

export const generateDummyGallerySliderModule = (): GallerySliderModule => {
  return {
    id: uuid(),
    name: 'gallerySlider',
    topMargin: '0px',
    bottomMargin: '0px',
    modalImage: [
      {
        imageUrl:
          'https://www.goodfood.com.au/content/dam/images/h/0/f/a/q/i/image.related.wideLandscape.940x529.h0fa4n.png/1515456591895.jpg',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
      {
        imageUrl:
          'https://annessa.com/wp-content/uploads/Italian-food-ingredients_haoivy.jpg',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
      {
        imageUrl:
          'https://media.istockphoto.com/photos/health-food-for-fitness-picture-id855098134?k=6&m=855098134&s=612x612&w=0&h=eIWWpYWKTz_z2ryYAo0Dd97igUZVExzl4AKRIhUrFj4=',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
      {
        imageUrl:
          'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
      {
        imageUrl:
          'https://www.jamieoliver.com/italian/uploaded/2019/january/25.Meat-plank_69--1--mobile.jpeg',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
      {
        imageUrl:
          'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/12/19/18/sush0istock-gkrphoto.jpg',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
      {
        imageUrl:
          'https://www.frascafoodandwine.com/wp-content/uploads/Salumi-Julia-Vandenoever.jpg',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
      {
        imageUrl:
          'https://i.pinimg.com/originals/bb/97/5a/bb975aa2c76370ab5c54e3cd97c1c1f8.jpg',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
      {
        imageUrl:
          'https://dailytimes.com.pk/assets/uploads/2018/11/21/howcuttingdo.jpg',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
      {
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAe-8-zu6z949U3GXeHoHXnBggjtoGO_sI50AF8DKxa7GGQh9aYg',
        caption: 'Donec lacinia nulla sed ligula congue aliquam:',
      },
    ],
  } as GallerySliderModule;
};
