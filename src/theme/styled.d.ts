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
    };
    border: {
      thickness: number;
      gradient: string;
    };
  }
}
