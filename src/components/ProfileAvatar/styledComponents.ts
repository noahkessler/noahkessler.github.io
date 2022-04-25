import styled from "styled-components";

export interface AvatarProps {
  /**
   * Radius of the circle
   */
  radius: number;

  /**
   * Image to display in the profile avatar
   */
  image: string;
}

export const Avatar = styled.div<AvatarProps>`
  width: ${(props) => props.radius * 2}px;
  height: ${(props) => props.radius * 2}px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  border-radius: 50%;
`;

interface BorderProps {
  /**
   * Radius of the circle
   */
  radius: number;
}

export const Border = styled.div<BorderProps>`
  background: ${(props) => props.theme.border.circle.gradient};
  padding: ${(props) => `${props.theme.border.circle.thickness}px`};
  border-radius: 50%;
  width: ${(props) => props.radius * 2}px;
  height: ${(props) => props.radius * 2}px;
`;
