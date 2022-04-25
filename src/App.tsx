import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AboutMe } from "./sections";
import { Sections } from "./styledComponents";
import { darkMode } from "./theme/theme";

const App = () => {
  // TODO: add toggle to switch between light and dark
  const [theme, setTheme] = useState(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <Sections>
        <AboutMe />
      </Sections>
    </ThemeProvider>
  );
};

export default App;
