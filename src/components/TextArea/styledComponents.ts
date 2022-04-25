import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.font.paragraph.family};
  font-size: ${(props) => props.theme.font.paragraph.size}px;
  color: ${(props) => props.theme.palette.primary};
  margin: 0;
`;
