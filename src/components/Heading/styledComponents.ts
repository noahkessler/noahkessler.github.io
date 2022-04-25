import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.font.heading.family};
  color: ${(props) => props.theme.palette.secondary};
  font-size: ${(props) => props.theme.font.heading.size}px;
  margin: 0;
`;

export const Subtitle = styled.h1`
  font-family: ${(props) => props.theme.font.subheading.family};
  color: ${(props) => props.theme.palette.primary};
  font-size: ${(props) => props.theme.font.subheading.size}px;
  margin: 0;
`;
