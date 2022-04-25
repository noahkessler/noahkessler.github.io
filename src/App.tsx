import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { scrollIntoView } from "./helpers";
import { AboutMe, Nav, Separator, SkillsAndTech } from "./sections";
import { Experience } from "./sections/Experience";
import { Sections } from "./styledComponents";
import { darkMode } from "./theme";

const App = () => {
  // TODO: add toggle to switch between light and dark
  const [theme, setTheme] = useState(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <Sections>
        <Nav />
        <AboutMe />
        <Separator onClick={scrollIntoView("Skills&Tech")} />
        <SkillsAndTech />
        <Separator onClick={scrollIntoView("Experience")} />
        <Experience />
      </Sections>
    </ThemeProvider>
  );
};

export default App;
