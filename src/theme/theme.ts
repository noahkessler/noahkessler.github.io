import { DefaultTheme } from "styled-components";

export const darkMode: DefaultTheme = {
  palette: {
    primary: "#EFF4FC",
    secondary: "#81F495",
    background: "#001524",
  },
  font: {
    heading: {
      family: "'Pridi', serif",
      size: 70,
    },
    subheading: {
      family: "'Rosario', sans-serif",
      size: 40,
    },
    paragraph: {
      family: "'Rosario', sans-serif",
      size: 25,
    },
    navbar: {
      family: "'Rosario', sans-serif",
      size: 25,
    },
  },
  border: {
    circle: {
      thickness: 5,
      gradient:
        "radial-gradient(75.33% 75.33% at 85.1% 10.62%, #81F495 0%, #005AFF 81.77%, #81F495 100%)",
    },
    box: {
      thickness: 3,
      gradient:
        "radial-gradient(100% 100% at 50.08% 0%, #81F495 0%, #005AFF 100%)",
    },
  },
};
