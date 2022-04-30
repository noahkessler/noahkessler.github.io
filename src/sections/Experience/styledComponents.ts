import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

export const Header = styled.h1`
  font-family: ${(props) => props.theme.font.heading.family};
  font-size: ${(props) => props.theme.font.heading.size}px;
  color: ${(props) => props.theme.palette.primary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
