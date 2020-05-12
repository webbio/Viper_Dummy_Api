import { WordPressPostModule, paddingDesktop, paddingMobile } from "./wordpress-post-module";
import { ApiModelProperty } from "@nestjs/swagger";
import { ExpandablePanel } from "./expandable-panel";
import uuid = require("uuid");

export class Toggle {
  @ApiModelProperty({ type: [ExpandablePanel] })
  public items: ExpandablePanel[];

  @ApiModelProperty()
  public title: string;
}

export class ToggleModule extends WordPressPostModule {
  @ApiModelProperty({ type: Toggle })
  public toggle: Toggle;
}

export const generateDummyToggleModule = (): ToggleModule => {
  return {
    id: uuid(),
    name: "ToggleModule",
    background: {
      pattern: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/pattern-food.png",
    },
    toggle: {
      title: "Veelgestelde vragen",
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
    topMargin: "0px",
    bottomMargin: "0px",
    topPadding: {
      desktopPadding: paddingDesktop.desktopPaddingMedium,
      mobilePadding: paddingMobile.mobilePaddingMedium,
    },
    bottomPadding: {
      desktopPadding: paddingDesktop.desktopPaddingMedium,
      mobilePadding: paddingMobile.mobilePaddingMedium,
    },
  };
};
