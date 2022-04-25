import styled from "styled-components";

export const Container = styled.div`
  border-radius: 100%;
  padding: 25px 10px;

  border: 6px solid transparent;

  :hover {
    cursor: pointer;
    border: 6px solid ${(props) => props.theme.palette.secondary};
    transition: border 1s;
  }
`;
