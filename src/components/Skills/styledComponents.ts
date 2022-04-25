import styled, { css } from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 500px;
`;

interface TechContainerProps {
  /**
   * True if the current skill is selected
   */
  isSelected: boolean;
}

export const TechContainer = styled.div<TechContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #7a7f86;
  background: ${(props) => props.theme.palette.background};
  border-radius: 0 0 20px 20px;
  padding: 12px;
  gap: 12px;
  flex-wrap: wrap;

  ${(props) =>
    props.isSelected
      ? ""
      : css`
          display: none;
        `}
`;

interface BorderProps {
  /**
   * True if the current skill is selected
   */
  isSelected: boolean;
}

export const Border = styled.div<BorderProps>`
  background: ${(props) => props.theme.border.box.gradient};
  padding: ${(props) => `${props.theme.border.box.thickness}px`};
  border-radius: 20px;

  :hover {
    cursor: pointer;
  }

  .paragraph {
    padding: 20px;
    border-radius: 20px;
    background: ${(props) => props.theme.palette.background};
    ${(props) =>
      props.isSelected
        ? css`
            border-radius: 20px 20px 0 0;
          `
        : ""}
  }
`;
