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
export const generateProductLineStorySingleBodyTextHtml = (): BodyTextModule => {
  return {
    html: `   <div className="uk-container"
     <div>
    <h3>Écht Japans eten, zonder poespas</h3>
    <p>
      Cras ligula mauris, condimentum a eros efficitur, convallis imperdiet diam. Quisque rhoncus erat libero, vitae
      auctor tellus pulvinar id. Ut placerat hendrerit tincidunt. Integer euismod eu libero id consequat. In ante
      sapien, maximus a nunc nec, faucibus tempus diam. Donec justo risus, mattis eu ligula sit amet, viverra.<br/>
      <a variant="default" href="#"  >Bekijk producten</a>

    </p>
  </div>
  <br/>
  <br/>
  <br/>

  <div>
  <div>
  <div className="uk-grid uk-grid-large">
    <div className="uk-width-2-5@m">
      <div className="body-text__video">
        <img src="https://viper-development-images.s3-eu-west-1.amazonaws.com/Terrasana/productLineOverview/1.jpg" alt="image" />
      </div>
    </div>
    <div className="uk-width-3-5@m">
      <h3>Meer support voor de vrouwelijke boeren</h3>
      <p>
        Sed id ex vitae diam cursus congue nec at ligula. Donec sit amet lacinia dui. Cras non nulla faucibus,
        elementum nisi at, fermentum diam. Nulla tempor lobortis euismod. Nam ullamcorper finibus convallis.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a libero aliquam, feugiat est sed,
        convallis dui. Morbi viverra pharetra eros, malesuada rutrum erat venenatis in.
      </p>
    </div>
  </div>
</div>
</div>
  `,
    id: uuid(),
    name: 'bodyTextModule',
    bottomMargin: '0px',
    topMargin: '0px',
    containerSize: 'large',
    containerAlignment: 'center',
  };
};
export const generateProductLineStorySingleBodyTextHtml2 = (): BodyTextModule => {
  return {
    html: `      <h3>Japans bio food rechstreeks van de hardwerkende boer</h3>
    <p>
      Praesent vitae neque egestas sem efficitur aliquam. Nunc pharetra, mauris at laoreet condimentum, mi risus
      convallis velit, a eleifend tortor odio in dui. Quisque elit neque, placerat vel volutpat eget, cursus et felis.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus imperdiet sodales. Duis blandit tortor a
      erat sodales tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </p>
    <ul>
      <li>Suspendisse tristique nisl malesuada aliquam elit eu pulvinar velit </li>
      <li>Praesent vitae neque egestas sem efficitur aliquam.</li>
      <li>Nunc pharetra, mauris at laoreet condimentum, mi risus convallis velit, a eleifend tortor odio in dui.</li>
      <li>Quisque elit neque, placerat vel volutpat eget, cursus et felis.</li>
    </ul>
  `,
    id: uuid(),
    name: 'bodyTextModule',
    bottomMargin: '0px',
    topMargin: '0px',
    containerSize: 'medium',
    containerAlignment: 'center',
  };
};
