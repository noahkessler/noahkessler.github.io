import styled, { css } from "styled-components";

interface ContainerProps {
  /**
   * Flipped - is the experience flipped (right to left)
   */
  flipped: boolean;

  /**
   * Is the experience expanded to show full details
   */
  isExpanded: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 32px;

  .description {
    display: none;
  }

  ${(props) =>
    props.isExpanded
      ? css`
          flex-direction: "column";
          .description {
            display: block;
          }
          .logo {
            width: 70%;
          }
        `
      : ""}

  ${(props) =>
    props.flipped
      ? css`
          flex-direction: row-reverse;
        `
      : ""}

  :hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 165px;
  height: 165px;
`;

interface LogoContainerProps {
  /**
   * Image background color
   */
  imageBackgroundColor: string;

  /**
   * Adds a border to the container
   */
  withBorder: boolean;
}

export const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;
  justify-content: center;
  background: ${(props) => props.imageBackgroundColor};
  border-radius: 20px;
  ${(props) =>
    props.withBorder
      ? css`
          border: 1px solid ${props.theme.palette.primary};
        `
      : ""}
`;

interface OverviewProps {
  /**
   * Is the experience expanded to show full details
   */
  isExpanded: boolean;
}

export const Overview = styled.div<OverviewProps>`
  display: flex;
  justify-content: center;
  gap: 12px;
  color: ${(props) => props.theme.palette.primary};
  :hover {
    color: ${(props) => props.theme.palette.secondary};
  }

  ${(props) =>
    props.isExpanded
      ? css`
          flex-direction: row;
          justify-content: space-between;
          width: 70%;
        `
      : css`
          flex-direction: column;
        `}
`;

export const OverviewText = styled.h2`
  font-family: ${(props) => props.theme.font.subheading.family};
  font-size: ${(props) => props.theme.font.subheading.size}px;
  margin: 0;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.palette.primary};
  font-family: ${(props) => props.theme.font.paragraph.family};
  font-size: ${(props) => props.theme.font.paragraph.size}px;
  width: 70%;
`;
