import styled from "styled-components";

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedLabel = styled.p`
  color: ${(props) => props.theme.palette.primary};
  font-family: ${(props) => props.theme.font.paragraph.family};
  font-size: ${(props) => props.theme.font.paragraph.size}px;
  text-align: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  .img {
    width: 50%;
    height: 50%;
  }
`;
