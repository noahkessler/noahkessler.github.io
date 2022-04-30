import styled from "styled-components";

export const Container = styled.div`
  border-radius: 100%;
  padding: 20px 5px;

  border: 6px solid transparent;

  svg {
    padding-top: 8px;
    padding-left: 4px;
    padding-right: 4px;
  }

  :hover {
    cursor: pointer;
    border: 6px solid ${(props) => props.theme.palette.secondary};
    transition: border 1s;
  }
`;
