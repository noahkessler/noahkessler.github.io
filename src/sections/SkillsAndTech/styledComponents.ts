import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20%;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-family: ${(props) => props.theme.font.heading.family};
  font-size: ${(props) => props.theme.font.heading.size}px;
  color: ${(props) => props.theme.palette.primary};
`;
