import { NavBarModule } from "src/model/nav-bar-module";
import uuid = require("uuid");
import { MainHeaderModule } from "src/model/welcome-module";
import { ButtonType } from "src/enums/button-type";
import { ProductLineStoryOverviewModule } from "src/model/product-line-story-overview-module";
import { NotYetImplemented } from "src/model/not-yet-implemented-module";
import { FooterModule, generateLikeSocialMediaButtons } from "src/model/footer-component";
import { InstagramWalllModule } from "src/model/instagram-wall";
import { CTAModule } from "src/model/cta-module";
import { paddingDesktop, paddingMobile } from "src/model/wordpress-post-module";

const generateDummyNavBarModule = (): NavBarModule => {
  return {
    topLinks: [
      { content: "Over ons", route: "about-us" },
      { content: "Nieuws", route: "news-overview" },
      { content: "FAQ", route: "faq-overview" },
      { content: "Zakelijk", route: "business" },
      { content: "Contact", route: "contact" },
    ],
    botLinks: [
      { content: "Producten", route: "product-line-overview" },
      { content: "Recepten", route: "recipe-overview" },
      { content: "Verkooppunten", route: "about-us" },
    ],
    first_logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/group.svg",
    second_logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/group-2.svg",
    id: uuid(),
    name: "Navbar",
    bottomMargin: "0px",
    topMargin: "0px",
  };
};

const generateDummyWelcomeModule = (): MainHeaderModule => {
  return {
    id: uuid(),
    name: "WelcomeModule",
    topMargin: "0px",
    bottomMargin: "0px",
    headerText: "Proef en voel dat het goed is.",
    bodyText:
      "We houden van echt eten, waarmee je iets goed doet voor jezelf én de wereld om je heen. Samen. Dat is positive eating!",
    welcomeImage: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/rectangle-copy.png",
    bigCardLeft: {
      content: "Producten",
      route: "/products",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/card1.png",
    },
    bigCardRight: {
      content: "Recepten",
      route: "/recipes",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/card2.png",
    },
    smallCard1: {
      content: "Recept van de maand: freakshake met curcuma latte!",
      route: "/products",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/small-card1.png",
    },
    smallCard2: {
      content: "Gezonde snack? Probeer onze nieuwe snackmixen!",
      route: "/products",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/small-card2.png",
    },
    smallCard3: {
      content: "RECEPT: vegan & glutenvrij courgettebrood",
      route: "/products",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/small-card3.png",
    },
  } as MainHeaderModule;
};

export const generateDummyCTAModuleHomePage1 = (): CTAModule => {
  return {
    titleText: "Wat goed eten is, weten we bij Terrarana al 35 jaar.",
    bodyText:
      "Bij ons weet je niet alleen zeker dat de producten echt biologisch zijn, maar ook dat we alles met de grootste zorg uitkiezen en samenstellen. We hebben aandacht voor kwaliteit, natuur, milieu, smaak en productiewijze. We zijn altijd op zoek naar de mooiste en meest verantwoorde ingrediënten. Onze medewerkers weten wat ze in handen hebben en bereiden met hart en ziel veel zelf. Geen poespas maar pure en eerlijke producten.",
    buttons: [
      {
        href: "#",
        target: "_blank",
        title: "Meer over ons",
        variant: "secondary",
        type: "",
        icon: "",
        onClick: "",
        location: "center",
      },
    ],
    id: uuid(),
    name: "CTAModule",
    bottomMargin: "0px",
    topMargin: "0px",
    containerAlignment: "center",
    contentAlignment: "center",
  };
};

export const generateDummyCTAModuleHomePage2 = (): CTAModule => {
  return {
    titleText: "Maak je eigen biologische wraps!",
    bodyText: "Binnen een half uur je eigen biologische hoemoes. Lees hier hoe dat moet!",
    buttons: [
      {
        href: "#",
        target: "_blank",
        title: "Bekijk recept",
        variant: "primary",
        type: "",
        icon: "",
        onClick: "",
        location: "center",
      },
      {
        href: "#",
        target: "_blank",
        title: "Bekijk alle recepten",
        variant: "secondary",
        type: "",
        icon: "",
        onClick: "",
        location: "center",
      },
    ],
    id: uuid(),
    name: "CTAModule",
    bottomMargin: "0px",
    topMargin: "0px",
    containerAlignment: "left",
    contentAlignment: "left",
    imageURL: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/rectangle-5.png",
  };
};

export const generateDummyInstagramWallModule = (): InstagramWalllModule => {
  return {
    id: uuid(),
    name: "InstagramModule",
    topMargin: "0px",
    bottomMargin: "0px",
    title: "Wij hebben veel producten in huis!",
    posts: [
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Back to school lunch box! #lunchbox #backtoschool #snackmix",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Peanut butter cookies with...",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "What do you like to put...",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "How colorful do you want your pasta to be? (Gluten-free)...",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title:
          "Yes, another (vegan) poké bowl! The veggies and rice were delicious, but the sauce definitely was the best...",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Title ",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Title 111",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Title 111",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Title 1",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Title ",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Title ",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Title 1",
      },
      {
        imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
        title: "Title 2",
      },
    ],
  } as InstagramWalllModule;
};

const generateNotYetImplemented = (): NotYetImplemented => {
  return {
    id: uuid(),
    bottomMargin: "40px",
    topMargin: "40px",
    name: "notYetImplemented",
    moduleName: "Related Products Module",
  };
};

const generateDummyFooterModule = (): FooterModule => {
  return {
    likeSocialMedia: generateLikeSocialMediaButtons(),
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    footerSections: [
      {
        title: "Onze producten",
        links: [
          { content: "Triangle", route: "product-single" },
          { content: "Latte", route: "product-single" },
          { content: "Notenpasta", route: "product-single" },
          { content: "Row superfood", route: "product-single" },
          { content: "Mideterrane keuken", route: "product-single" },
          { content: "Japan moderne keuken", route: "product-single" },
        ],
      },
      {
        title: "Terrasana",
        links: [
          { content: "Over ons", route: "about-us" },
          { content: "Nieuws", route: "news-overview" },
          { content: "FAQ", route: "faq-overview" },
          { content: "Alle producten", route: "product-line-overview" },
          { content: "Recepten", route: "recipe-overview" },
        ],
      },
      {
        title: "Koken met Terrasana",
        links: [
          { content: "Raw Superfood Recepten", route: "recipe-single" },
          { content: "Raw Superfood Smoothies", route: "recipe-single" },
          { content: "Ontbijt", route: "recipe-single" },
          { content: "Voorgerecht", route: "recipe-single" },
          { content: "Soepen", route: "recipe-single" },
          { content: "Pannenkoeken", route: "recipe-single" },
        ],
      },
      {
        title: "Contact",
        links: [
          { content: "Verkooppunten", route: "about-us" },
          { content: "Direct contact", route: "contact" },
          { content: "Zakelijk", route: "business" },
        ],
      },
    ],
    footerLinks: [
      {
        content: "Privacy policy",
        route: "",
      },
      {
        content: "Algemene voorwaarden",
        route: "",
      },
      {
        content: "Disclaimer",
        route: "",
      },
    ],
    logo: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/footergroup.svg",
    id: uuid(),
    topMargin: "",
    bottomMargin: "",
    name: "FooterModule",
  };
};

export const homePagemodules = [
  generateDummyNavBarModule(),
  generateDummyWelcomeModule(),
  generateDummyCTAModuleHomePage1(),
  generateNotYetImplemented(),
  generateDummyInstagramWallModule(),
  generateDummyCTAModuleHomePage2(),
  generateDummyFooterModule(),
];
