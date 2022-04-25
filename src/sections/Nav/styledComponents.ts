import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  gap: 10%;
`;

export const NavItem = styled.a`
  font-family: ${(props) => props.theme.font.navbar.family};
  font-size: ${(props) => props.theme.font.navbar.size}px;
  color: ${(props) => props.theme.palette.primary};
  :hover {
    cursor: pointer;
    text-decoration: underline ${(props) => props.theme.palette.secondary} 3px;
    text-underline-offset: 14px;
  }
`;
