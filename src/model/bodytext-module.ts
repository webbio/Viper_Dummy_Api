import { ApiModelProperty } from '@nestjs/swagger';
import { WordPressPostModule } from './wordpress-post-module';
import uuid = require('uuid');
import { ContainerSize } from 'src/enums/container-size';
import { ContainerAlignment } from 'src/enums/container-alignment';

export class BodyTextModule extends WordPressPostModule {
  @ApiModelProperty()
  public html: string;

  @ApiModelProperty()
  public containerSize: 'full' | 'large' | 'medium' | 'small';

  @ApiModelProperty()
  public containerAlignment: 'left' | 'center' | 'right';
}

export const generateBodyTextModule = (html: string): BodyTextModule => {
  return {
    html,
    id: uuid(),
    name: 'bodyTextModule',
    bottomMargin: '0px',
    topMargin: '0px',
    containerSize: 'medium',
    containerAlignment: 'center',
  };
};
export const generateBodyTextModuleAboutUs = (html: string): BodyTextModule => {
  return {
    html,
    id: uuid(),
    name: 'bodyTextModule',
    bottomMargin: '0px',
    topMargin: '0px',
    containerSize: 'medium',
    containerAlignment: 'center',
    curve: {
      decorCurveVerticalAlignment: 'bottom',
      decorCurveHorizontalAlignment: 'right',
      curveBackground: {
        backgroundColour: '#f5fafa',
      },
    },
  };
};
export const getHomepageBodyTextHtml = () => {
  return `<head>
            <style>
                body {
                background-color: white;
                }

                h1 {
                color: maroon;
                }
            </style>
        </head>
            <body>
                <h1>Dit is de BodyText module</h1>
                <p>Deze html wordt vanaf de API gestuurd. Dit kan straks door de klant zelf ingevoerd worden!</p>
                <p><img width="300px" src="https://i.imgur.com/1E2lPDD.jpg" /></p>
            </body>`;
};
