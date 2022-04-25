import "styled-components";

type Color = `#${string}`;

type Font = {
  /**
   * Name of the font-family
   */
  family: string;

  /**
   * Size of the font in pixels
   */
  size: number;
};

type Border = {
  /**
   * Width of the border in pixels
   */
  thickness: number;

  /**
   * Gradient of the border
   */
  gradient: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: Color;
      secondary: Color;
      background: Color;
    };
    font: {
      heading: Font;
      subheading: Font;
      paragraph: Font;
      navbar: Font;
    };
    border: {
      circle: Border;
      box: Border;
    };
  }
}
