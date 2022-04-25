import { scrollIntoView } from "../../helpers";
import { NavContainer, NavItem } from "./styledComponents";

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavItem onClick={scrollIntoView("About")}>{"About"}</NavItem>
      <NavItem onClick={scrollIntoView("Skills&Tech")}>
        {"Skills & Technologies"}
      </NavItem>
      <NavItem>{"Work Experience"}</NavItem>
    </NavContainer>
  );
};

export default Nav;
