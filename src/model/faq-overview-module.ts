import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import * as uuid from "uuid";
import { ApiModelProperty } from "@nestjs/swagger";

import { ContactForm } from "./contact-form";
import { AddressInfo } from "./address";
import { Phone } from "./phone";
import { ExpandablePanel } from "./expandable-panel";
import { Toggle } from "./toggle-module";

export class FAQOverviewModule extends WordPressPostModule {
  @ApiModelProperty({ type: [Toggle] })
  public groups: Toggle[];

  @ApiModelProperty()
  public sidebarTitle: string;
}

export const generateDummyFaqModule = (): FAQOverviewModule => {
  return {
    sidebarTitle: "Onderwerpen",
    groups: [
      {
        title: "Onderwerp 1",
        items: [
          {
            title: "Hoe worden deze noedels gemaakt?",
            content:
              "In at felis sed augue semper aliquet placerat sed urna. Mauris tincidunt porta pretium. Nulla tincidunt lectus eu enim eleifend tempor. Aenean placerat vel nisl ut dictum. Cras nec massa volutpat, aliquam lacus nec, vulputate ex. Aenean sit amet massa non ante tempor ultrices eu.",
          },
          {
            title: "Praesent vitae neque egestas sem efficitur aliquam",
            content:
              "Maecenas ultricies lectus vel lacinia pretium. Curabitur dictum aliquet mollis. Pellentesque vehicula ex a nisl semper, fermentum pulvinar est faucibus. Sed quis consequat dui. Vestibulum vehicula velit eu maximus dictum. Aenean ut ipsum vitae enim elementum efficitur eget sed eros. Nullam scelerisque, eros vitae lacinia maximus, elit libero posuere nunc, vel tristique diam magna laoreet mi. Sed pellentesque rutrum tellus at lobortis. Integer eros turpis, ultricies eleifend gravida.",
          },
          {
            title: "Quisque nisi magna bibendum in augue at",
            content: "Maecenas viverra dolor justo, quis tincidunt urna scelerisque sheet. Aliquam erat volutpat.",
          },
        ],
      },
      {
        title: "Onderwerp 2",
        items: [
          {
            title: "Quisque nisi magna bibendum in augue at",
            content:
              "In at felis sed augue semper aliquet placerat sed urna. Mauris tincidunt porta pretium. Nulla tincidunt lectus eu enim eleifend tempor. Aenean placerat vel nisl ut dictum. Cras nec massa volutpat, aliquam lacus nec, vulputate ex. Aenean sit amet massa non ante tempor ultrices eu.",
          },
          {
            title: "Cras eget metus a sapien vestibulum consectetur",
            content:
              "Maecenas ultricies lectus vel lacinia pretium. Curabitur dictum aliquet mollis. Pellentesque vehicula ex a nisl semper, fermentum pulvinar est faucibus. Sed quis consequat dui. Vestibulum vehicula velit eu maximus dictum. Aenean ut ipsum vitae enim elementum efficitur eget sed eros. Nullam scelerisque, eros vitae lacinia maximus, elit libero posuere nunc, vel tristique diam magna laoreet mi. Sed pellentesque rutrum tellus at lobortis. Integer eros turpis, ultricies eleifend gravida.",
          },
        ],
      },
      {
        title: "Onderwerp 3",
        items: [
          {
            title: "Duis blandit tortor a erat",
            content:
              "In at felis sed augue semper aliquet placerat sed urna. Mauris tincidunt porta pretium. Nulla tincidunt lectus eu enim eleifend tempor. Aenean placerat vel nisl ut dictum. Cras nec massa volutpat, aliquam lacus nec, vulputate ex. Aenean sit amet massa non ante tempor ultrices eu.",
          },
          {
            title: "Curabitur tempus mi et tellus iaculis volutpat",
            content:
              "Maecenas ultricies lectus vel lacinia pretium. Curabitur dictum aliquet mollis. Pellentesque vehicula ex a nisl semper, fermentum pulvinar est faucibus. Sed quis consequat dui. Vestibulum vehicula velit eu maximus dictum. Aenean ut ipsum vitae enim elementum efficitur eget sed eros. Nullam scelerisque, eros vitae lacinia maximus, elit libero posuere nunc, vel tristique diam magna laoreet mi. Sed pellentesque rutrum tellus at lobortis. Integer eros turpis, ultricies eleifend gravida.",
          },
          {
            title: "Suspendisse rhoncus sem id ante pellentesque eget ullamcorper leo tincidunt",
            content: "Maecenas viverra dolor justo, quis tincidunt urna scelerisque sheet. Aliquam erat volutpat.",
          },
          {
            title: "Praesent tempor turpis id diam auctor cursus",
            content: `Nunc iaculis felis sollicitudin, tincidunt orci eget, iaculis diam. In felis ipsum, molestie eget commodo vitae, tincidunt sed tellus. Aenean imperdiet consectetur sem. Praesent vel ipsum justo. Fusce sed tortor a mi pretium imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vitae urna libero. Vestibulum lacinia lobortis metus, nec mollis lacus imperdiet sit amet. Quisque posuere, felis vel lobortis semper, odio nulla suscipit justo, sit amet gravida metus est at purus. Suspendisse metus ante, tincidunt ac scelerisque quis, venenatis non lectus. Morbi lacus urna, tincidunt non venenatis molestie, luctus semper lorem. Pellentesque blandit sit amet nisi a fringilla.

Aenean sagittis volutpat eros, at egestas est convallis sed.Quisque vel finibus purus.Fusce porttitor venenatis justo, ut bibendum odio.Quisque et mauris tincidunt, tincidunt tortor id, molestie nunc.Integer a nulla mi.Donec massa tellus, euismod et cursus nec, interdum id dolor.Curabitur porta tincidunt nulla, sed convallis felis congue sit amet.Fusce at enim fermentum, feugiat dui ac, iaculis lorem.Curabitur sagittis augue ut libero lacinia, vel tempus felis sagittis.Mauris quis neque neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus commodo nulla at purus sodales, et ultrices arcu condimentum.Nam quis libero id quam consequat euismod quis non nulla.`,
          },
        ],
      },
      {
        title: "Onderwerp 4",
        items: [
          {
            title: "Duis blandit tortor a erat",
            content:
              "In at felis sed augue semper aliquet placerat sed urna. Mauris tincidunt porta pretium. Nulla tincidunt lectus eu enim eleifend tempor. Aenean placerat vel nisl ut dictum. Cras nec massa potato volutpat, aliquam lacus nec, vulputate ex. Aenean sit amet massa non ante tempor ultrices eu.",
          },
        ],
      },
    ],
    id: uuid(),
    name: "FAQOverviewModule",
    bottomMargin: "0px",
    background: {
      color: "#DDEDED",
    },
    topMargin: "0px",
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingSmall,
      mobilePadding: paddingMobile.mobilePaddingSmall,
    },
  };
};
