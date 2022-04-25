import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LineProps {
  /**
   * Default direction is top-left to bottom-right.
   * Flipped will change the direction from top-right to bottom-left.
   */
  flipped: boolean;
}
export const Line = styled.img<LineProps>`
  ${(props) =>
    props.flipped
      ? css`
          transform: scaleX(-1);
        `
      : ""}
`;
