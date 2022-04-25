import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Border = styled.div`
  background: ${(props) => props.theme.border.box.gradient};
  padding: ${(props) => `${props.theme.border.box.thickness}px`};
  border-radius: 20px;

  .paragraph {
    padding: 20px;
    border-radius: 20px;
    background: ${(props) => props.theme.palette.background};
  }
`;
